import Overlay from '../Overlay';
import { memo } from 'react';

type MessageDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  header?: string;
  contents?: string[];
};
const MessageDialog: React.FC<MessageDialogProps> = ({
  open = false,
  onClose,
  onConfirm,
  header = '',
  contents = [],
}) => {
  return open ? (
    <div className="relative w-full h-full max-w-2xl md:h-auto px-4">
      <Overlay />
      {/* Modal content */}
      <div className="relative z-50 bg-white rounded-lg shadow ">
        {/* Modal header */}
        <div className="flex items-start justify-between p-4 border-b rounded-t ">
          <h3 className="text-xl font-semibold text-blue-600 ">{header}</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
            data-modal-toggle="defaultModal"
            onClick={onClose}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-6 space-y-6">
          {contents.map((content, index) => (
            <p key={index} className="text-base leading-relaxed text-gray-900">
              {content}
            </p>
          ))}
        </div>
        {/* Modal footer */}
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
            onClick={onConfirm}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default memo(MessageDialog);
