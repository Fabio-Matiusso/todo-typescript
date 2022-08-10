import checkedIcon from '../../assets/checked.svg';
import trashIcon from '../../assets/trash.svg';
import { Task } from '../../types/Task';
import { Fade } from 'react-reveal';
import { useState } from 'react';

const Tasks = ({ content }: Task) => {
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  const [display, setDisplay] = useState<string>('block');

  const [checked, setChecked] = useState<boolean>(false);

  const handleDeleteItem = () => {
    setTimeout(() => {
      setDisplay('hidden');
      setFadeOut(!fadeOut);
    }, 200);
  };

  const handleChecked = () => {
    setChecked(!checked);

    setTimeout(() => {
      setDisplay('hidden');
      setFadeOut(!fadeOut);
    }, 700);
  };

  return (
    <Fade bottom>
      <div
        className={`flex justify-between items-center px-2 py-2 w-3/6 bg-gray-200 rounded-lg my-0 mx-auto mt-3 transition-all duration-150 ease-in-out ${
          !fadeOut ? `opacity-0 ` : `opacity-100`
        } ${display} ${checked ? 'line-through' : 'no-underline'}`}
      >
        <p>{content}</p>
        <div className="flex">
          <img
            className="w-10 cursor-pointer"
            src={trashIcon}
            onClick={handleDeleteItem}
          />
          <img
            className="w-7 cursor-pointer"
            src={checkedIcon}
            onClick={handleChecked}
          />
        </div>
      </div>
    </Fade>
  );
};

export default Tasks;
