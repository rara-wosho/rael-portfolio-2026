import Image from "next/image";
const GithubStreak = () => {
    return (
        <div className="border">
            <Image
                width={0}
                height={0}
                sizes="100vw"
                src="https://github-readme-streak-stats.herokuapp.com/?user=rara-wosho&theme=dark&hide_border=true"
                alt="GitHub Streak"
            />
        </div>
    );
};

export default GithubStreak;
