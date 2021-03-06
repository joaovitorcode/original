import { HiX } from 'react-icons/hi'
import { SetStateAction, Dispatch, MouseEvent } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'

interface ModalDialogProps {
  setIsOpenReportModal: Dispatch<SetStateAction<boolean>>
  subjectURL: string
}

export function ReportModal({
  setIsOpenReportModal,
  subjectURL,
}: ModalDialogProps) {
  const notify = () => toast.success('Post reported successfully!')

  function handleOverlay(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      setIsOpenReportModal(false)
    }
  }

  async function handleReport() {
    await axios.post('/api/addReport', {
      subjectURL,
      createdAt: new Date(),
      moderated: false,
      reported: false,
    })
    setIsOpenReportModal(false)
    notify()
  }

  return (
    <div
      onClick={event => handleOverlay(event)}
      className="bg-black bg-opacity-50 fixed inset-0 z-10 flex items-center justify-center"
    >
      <div className="sm:max-w-md w-full h-full sm:h-auto bg-white dark:bg-slate-800 p-4 rounded flex flex-col gap-4">
        <header className="flex items-center justify-between">
          <strong className="text-lg font-semibold dark:text-white">
            Título do modal
          </strong>
          <button
            onClick={() => setIsOpenReportModal(false)}
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
            onClick={() => setIsOpenReportModal(false)}
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
