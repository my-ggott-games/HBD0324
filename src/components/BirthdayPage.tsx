import AudioPlayer from './AudioPlayer';
import BirthdayCake from "./BirthdayCake";

function BirthdayPage() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold">🎉 생일축하해요! 🎉</h1>
            <AudioPlayer />
            <BirthdayCake/>
        </div>
    );
}

export default BirthdayPage;