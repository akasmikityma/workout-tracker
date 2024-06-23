import { atom ,atomFamily,selectorFamily,selector} from "recoil";

export interface task{
    id:number,
    title:string,
    completed:boolean
}

export const tasksAtom=atom({
    key:"the_tasks",
    default:<task[]>[]
})
// export const taskAtomfamily = atomFamily<task | undefined, number>({
//     key: "taskAtomfamily",
//     default: (id: number) => {
        
//     }
// });
export const myAtomFamily = atomFamily({
    key: 'allatoms',
    default: selectorFamily({
      key: 'MyAtom/Default',
      get: id => ({get}) => {
        const otherAtomValue = get(tasksAtom);
        return otherAtomValue.find((at)=>at.id===id);
      },
    }),
  });
export const GetCompletedSelector=selector<task[]>({
    key: 'getCompletedTasks',
    get: ({ get }) => {
        const allTasks = get(tasksAtom);
        return allTasks.filter((task) => task.completed);
    },
})

export const CompletedOnesAtom=atom({
    key:"anotherAtomForTheCompletedOnes",
    default:<task[]>[]
})