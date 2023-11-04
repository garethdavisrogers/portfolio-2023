import {IResume} from "./Iresume";

export default function Summary(props: {resume:IResume}){
    return (
        <div id="summary" className="mt-12 py-12 max-w-screen-lg mx-auto text-center">
            <h2 className="text-2xl">About Me</h2>
            <br/>
            <h6>
               {props.resume.summary}
            </h6>
        </div>
    )
}