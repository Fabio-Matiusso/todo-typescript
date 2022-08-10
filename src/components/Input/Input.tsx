import { ChangeEvent, useState } from 'react';
import Tasks from '../Tasks/Tasks';
import { Fade } from 'react-reveal';

const Input = () => {
  const [task, setTask] = useState<string>('');

  const [todo, setTodo] = useState<string[]>([]);

  const handleTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const preventDefault = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTodo([...todo, task]);
    setTask('');
  };

  return (
    <Fade bottom>
      <>
        {todo.length > 0 && todo.map((item) => <Tasks content={item} />)}

        <form
          className="flex justify-center gap-10 mt-10"
          onSubmit={preventDefault}
        >
          <input
            type="text"
            value={task}
            onChange={handleTask}
            placeholder="Digite sua tarefa"
            className="w-2/5 h-12 outline-none border border-solid border-gray-700 rounded-2xl p-6 flex justify-beetwen"
          />
          <button
            type="submit"
            className="bg-cyan-400 rounded-2xl text-neutral-700 p-3"
          >
            Adicionar tarefa
          </button>
        </form>
      </>
    </Fade>
  );
};

export default Input;
