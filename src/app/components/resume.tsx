import {IResume} from "./Iresume";

export default function Resume(props:{resume: IResume}){

    type Job = {
        name: string,
        title: string,
        description: string,
        bullets: string[]
    }
    return (
            <div id="resume" className="flex-col justify-between">
                {props.resume.resume.map((job:Job)=>{
                    return (
                    <div key={job.name} className="flex-col mx-auto max-w-screen-lg mt-5 py-3">
                        <h1 className="text-2xl py-2">{job.name}</h1>
                        <h3 className="font-semibold py-1">{job.title}</h3>
                        <div>
                            <h5 className="pt-2"><u>Achievements</u></h5>
                            <ol className="list-decimal list-inside">
                                {job.bullets.map((b)=>{return(<li className="leading-relaxed" key={b}>{b}</li>)})}
                            </ol>
                        </div>
                    </div>)
                })}
            </div>
    )}