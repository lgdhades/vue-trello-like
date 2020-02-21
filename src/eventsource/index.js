import Handlers from './handlers'

export default function configureEventSources () {
  const eventSource = new EventSource("http://localhost:5555/stream")
  for (const handler of Handlers) {
    eventSource.addEventListener(handler.eventType, event => {
      handler.handle(event)
    })
  }
}
