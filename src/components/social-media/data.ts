import { ElementType } from "react";
import {
    FaGithub,
    FaYoutube,
    FaTiktok,
    FaLinkedinIn,
    FaNpm,
    FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export type SocialMediaType = {
    icon: ElementType;
    label: string;
    link: string;
    id: string;
};

export const socialMedia: SocialMediaType[] = [
    {
        label: "Galadriel CSS GitHub Repository",
        link: "https://github.com/patrickgunnar/galadrielcss",
        id: "galadrielcss-github-repository-icon",
        icon: FaGithub,
    },
    {
        label: "Galadriel CSS Community Server",
        link: "https://discord.gg/jw3DKw9nK7",
        id: "galadrielcss-community-server-icon",
        icon: FaDiscord,
    },
    {
        label: "Galadriel CSS Twitter/X Account",
        link: "https://x.com/Galadriel_CSS",
        id: "galadrielcss-twiter-x-account-icon",
        icon: FaXTwitter,
    },
    {
        label: "Galadriel CSS YouTube Channel",
        link: "https://youtube.com/@galadrielcss",
        id: "galadrielcss-youtube-channel-icon",
        icon: FaYoutube,
    },
    {
        label: "Galadriel CSS TikTok Account",
        link: "https://www.tiktok.com/@galadrielcss",
        id: "galadrielcss-tiktok-account-icon",
        icon: FaTiktok,
    },
    {
        label: "Patrick Gunnar Linkedin Account",
        link: "https://www.linkedin.com/in/patrickgunnar/",
        id: "patrickgunnar-linkedin-account-icon",
        icon: FaLinkedinIn,
    },
    {
        label: "Galadriel CSS NPM",
        link: "https://www.npmjs.com/package/galadrielcss",
        id: "galadrielcss-npm-icon",
        icon: FaNpm,
    },
];
