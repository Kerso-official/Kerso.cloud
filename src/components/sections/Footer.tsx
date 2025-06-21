import { useEffect, useState } from "react";
// import { getRepoStats } from "@/lib/data";

export default function Footer() {
    // const [stats, setStats] = useState({ stars: 0, forks: 0 });

    // useEffect(() => {
    //     getRepoStats('Kerso-official', 'Kerso.cloud')
    //         .then(data => {
    //             setStats(data);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching repository stats:", error);
    //         });
    // });
    
    return (
        <footer className="w-full bg-[#18181b] text-gray-400 py-6 border-t border-gray-800">
            {/* <div className="max-w-5xl mx-auto px-4 mt-4">
                <div className="flex text-center items-center justify-center">
                    <span>
                        <p>⭐ {stats.stars} & 🍴 {stats.forks}</p>
                    </span>
                </div>
            </div> */}
            <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-base text-center md:text-left">
                    © {new Date().getFullYear()} Kerso. All rights reserved.
                </span>
                <div className="flex gap-6">
                    <a
                    href="https://github.com/Kerso-official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition"
                    >
                    GitHub
                    </a>
                    <a
                    href="mailto:kerso@kerso.cloud"
                    className="hover:text-white hover:underline transition"
                    >
                    Contact
                    </a>
                </div>
                
            </div>
      </footer>
    )
}