import { Tooltip } from 'react-tooltip';
import { Button } from '../ui/button';
import { cn, type PromtTypeValue } from '@/shared';

interface TooltipModalProps {
  id: string;
  type: PromtTypeValue;
  isOpen: boolean;
  setIsOpen: (flag: boolean) => void;
  aiText: string;
  isError: boolean;
  acceptButtonHandler?: (aiText: string) => void;
}

export const TooltipModal = ({
  id,
  type,
  isOpen,
  setIsOpen,
  isError,
  aiText,
  acceptButtonHandler,
}: TooltipModalProps) => {
  return (
    <Tooltip
      id={type}
      anchorSelect={`#btn-ai-${id}`}
      className={cn(` max-w-xl shadow z-10 flex flex-col gap-2`, {
        'bg-[rgba(254,233,231,1)]!': isError,
      })}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      openEvents={{
        focus: false,
        click: false,
      }}
      closeEvents={{
        click: false,
      }}
      clickable
      variant={isError ? 'error' : 'light'}
    >
      {isError && (
        <>
          <p className="font-semibold text-[rgba(192,15,12,1)] ">Произошла ошибка при запросе к AI</p>
          <p className="whitespace-pre-line text-black">Попробуйте повторить запрос или закройте уведомление</p>
        </>
      )}
      {!isError && (
        <>
          <p className="font-semibold ">Ответ AI:</p>
          <p className="whitespace-pre-line">{aiText}</p>
        </>
      )}

      <div className="flex gap-2">
        {acceptButtonHandler && (
          <Button
            variant={'primary'}
            type="button"
            onClick={() => {
              acceptButtonHandler(aiText);
              setIsOpen(false);
            }}
          >
            Применить
          </Button>
        )}

        <Button variant={isError ? 'destructive' : 'outline'} type="button" onClick={() => setIsOpen(false)}>
          Закрыть
        </Button>
      </div>
    </Tooltip>
  );
};
