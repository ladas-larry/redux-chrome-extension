export default function createInitState (storage) {
  return {
            persistent: storage,
            counter: storage.options.initCount
  }
}
