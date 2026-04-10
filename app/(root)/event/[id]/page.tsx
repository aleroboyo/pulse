import { events } from "@/data/events"
import { Metadata } from "next"
import EventDetails from "./EventDetails"

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params
  const event = events.find(e => e.id === id)

  return {
    title: event ? `Pulse – ${event.title}` : "Pulse – Event",
    description: event
      ? `Join ${event.title} in ${event.location}`
      : "Event details"
  }
}

const EventDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const event = events.find(e => e.id === id)

  if (!event) return <div>Event not found</div>

  return <EventDetails event={event} />
}

export default EventDetailsPage
