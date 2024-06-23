import React, { useEffect } from 'react';
import { task, myAtomFamily, CompletedOnesAtom } from '../store/AlltheAtoms';
import { useRecoilState } from 'recoil';

interface Props {
    t: task; // Define the type of 't' prop
}

const TaskComp: React.FC<Props> = ({ t }) => {
    const [aTask, setAtask] = useRecoilState(myAtomFamily(t.id));
    const [completedOnes,setCompletedOnes]=useRecoilState(CompletedOnesAtom);

    const onClickHandler = () => {
        console.log('inside the complete button handler');
        if (aTask) {
            const updatedTask = { ...aTask, completed: !aTask.completed };
            setAtask(updatedTask);
        }
    };

    useEffect(() => {
        if (aTask) {
            setCompletedOnes((prev) => {
                if (aTask.completed) {
                    return [...prev, aTask];
                } else {
                    return prev.filter(task => task.id !== aTask.id);
                }
            });
        }
    }, [aTask]);
    // useEffect(()=>{
    //     console.log(aTask)
    // },[aTask?.completed])
    return (
        <div className='flex justify-between'>
            <h3>{aTask?.title}</h3>
            <button className={`${aTask?.completed?`bg-green-500`:`bg-red-500`} p-1 rounded-md`} onClick={onClickHandler}>
                {aTask?.completed === false ? `Complete` : 'Done'}
            </button>
        </div>
    );
};

export default TaskComp;
