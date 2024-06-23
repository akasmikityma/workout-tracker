import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { tasksAtom, CompletedOnesAtom } from '../store/AlltheAtoms';
import TaskComp from './TaskComp';

const Home = () => {
    const [allTasks, setAllTasks] = useRecoilState(tasksAtom);
    const [inputValue, setInputValue] = useState('');
    const completedTasks = useRecoilValue(CompletedOnesAtom);

    const onClickHandler = () => {
        setAllTasks((prev) => [
            ...prev,
            { id: prev.length + 1, title: inputValue, completed: false }
        ]);
        setInputValue('');
    };

    return (
        <div className='flex items-center flex-col p-10 gap-8 bg-blue-600 min-h-screen'>
            <div className='flex text-lg font-extrabold p-4 w-full justify-between'>
                <h3>AppName</h3>
                <div>logo</div>
            </div>
            <div className='grid grid-cols-3 gap-4 w-full'>
                <div className='col-span-2 flex bg-white text-lg font-extrabold p-6 rounded-lg'>
                    <div className='w-full'>
                        <div className='flex justify-between border-black w-full gap-2'>
                            <input
                                type='text'
                                value={inputValue}
                                placeholder='Type a Task'
                                className='outline-none w-full'
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button
                                className='bg-yellow-400 rounded-xl px-2 py-1'
                                onClick={onClickHandler}
                            >
                                Add
                            </button>
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            {allTasks.map((t) => (
                                <TaskComp t={t} key={t.id} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='col-span-1 p-6 bg-white text-md font-bold rounded-lg'>
                    <h3 className='mb-4'>Completed Tasks</h3>
                    <ul>
                        {completedTasks.map((task) => (
                            <li key={task.id}>{task.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
