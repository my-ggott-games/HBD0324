import AudioPlayer from './AudioPlayer';
import BirthdayCake from "./BirthdayCake";

function BirthdayPage() {
    return (
        <div className="w-screen flex flex-col justify-center items-center mx-auto text-center gap-4">
            <h1 className="text-3xl font-pyeongchang-bold">Happy Birthday!</h1>
            <BirthdayCake/>
            <AudioPlayer />
        </div>
    );
}

export default BirthdayPage;