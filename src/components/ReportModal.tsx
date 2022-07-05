import { HiX } from 'react-icons/hi'
import { SetStateAction, Dispatch, MouseEvent } from 'react'
import { toast } from 'react-toastify'

interface ModalDialogProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function ReportModal({ setIsOpen }: ModalDialogProps) {
  const notify = () => toast.success('Post reported successfully!')

  function handleOverlay(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      setIsOpen(false)
    }
  }

  function handleReport() {
    setIsOpen(false)
    notify()
  }

  return (
    <div
      onClick={event => handleOverlay(event)}
      className="bg-black bg-opacity-50 fixed inset-0 z-10 flex items-center justify-center"
    >
      <div className="sm:max-w-md w-full h-full sm:h-auto bg-white dark:bg-slate-900 p-4 rounded flex flex-col gap-4">
        <header className="flex items-center justify-between">
          <strong className="text-lg font-semibold dark:text-white">
            Título do modal
          </strong>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:text-red-500 dark:text-white dark:hover:text-red-500"
          >
            <HiX size={20} />
          </button>
        </header>
        <main>
          <p className="text-slate-600 dark:text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            ornare ligula id dictum aliquet.
          </p>
        </main>
        <footer className="flex justify-end gap-4">
          <button
            onClick={() => setIsOpen(false)}
            className="px-3 py-1 rounded hover:bg-slate-200 dark:hover:bg-slate-600 dark:text-white"
          >
            Cancel
          </button>
          <button
            onClick={handleReport}
            className="px-3 py-1 rounded text-white bg-red-600 hover:bg-red-700"
          >
            Report
          </button>
        </footer>
      </div>
    </div>
  )
}
