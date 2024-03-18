import AudioPlayer from './AudioPlayer';
import BirthdayCake from "./BirthdayCake";

function BirthdayPage() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-pyeongchang-bold">🍟 Happy Birthday! 🍟</h1>
            <BirthdayCake/>
            <AudioPlayer />
        </div>
    );
}

export default BirthdayPage;