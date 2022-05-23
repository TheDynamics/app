import { useContext } from "react";
import DarkModeContext from "./DarkModeContext";

const TwitterIcon = ({ className }) => (
    <svg width="52" height="42" viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
        <path d="M51.2783 5.49984C49.4175 6.34567 47.4117 6.9015 45.3333 7.16734C47.46 5.8865 49.1033 3.8565 49.8767 1.41567C47.8708 2.624 45.6475 3.46984 43.3033 3.95317C41.3942 1.87484 38.7117 0.666504 35.6667 0.666504C29.9875 0.666504 25.3475 5.3065 25.3475 11.034C25.3475 11.8557 25.4442 12.6532 25.6133 13.4023C17.01 12.9673 9.34918 8.83484 4.25001 2.57567C3.35585 4.09817 2.84835 5.8865 2.84835 7.7715C2.84835 11.3723 4.66085 14.5623 7.46418 16.3748C5.74835 16.3748 4.15335 15.8915 2.75168 15.1665V15.239C2.75168 20.2657 6.32835 24.4707 11.065 25.4132C9.54427 25.8293 7.94774 25.8872 6.40085 25.5823C7.05723 27.6425 8.34273 29.4452 10.0766 30.7369C11.8105 32.0287 13.9057 32.7446 16.0675 32.784C12.403 35.6851 7.8605 37.2532 3.18668 37.2307C2.36501 37.2307 1.54335 37.1823 0.72168 37.0857C5.31335 40.034 10.775 41.7498 16.6233 41.7498C35.6667 41.7498 46.1309 25.9448 46.1309 12.2423C46.1309 11.7832 46.1308 11.3482 46.1067 10.889C48.1367 9.439 49.8767 7.60234 51.2783 5.49984Z" fill="#03A9F4" />
    </svg>
)

const FacebookIcon = ({ className }) => (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
        <path d="M25.0002 0.930176C11.7085 0.930176 0.833496 11.781 0.833496 25.1452C0.833496 37.2285 9.67849 47.2577 21.2302 49.0702V32.1535H15.0918V25.1452H21.2302V19.8043C21.2302 13.7385 24.831 10.4035 30.3652 10.4035C32.9993 10.4035 35.7543 10.8627 35.7543 10.8627V16.8318H32.7093C29.7127 16.8318 28.7702 18.6927 28.7702 20.6018V25.1452H35.4885L34.401 32.1535H28.7702V49.0702C34.4649 48.1708 39.6505 45.2652 43.3908 40.8778C47.1312 36.4905 49.1798 30.9105 49.1668 25.1452C49.1668 11.781 38.2918 0.930176 25.0002 0.930176Z" fill="#03A9F4" />
    </svg>
)

const LinkedInIcon = ({ className }) => (
    <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
        <path d="M41.7778 0C43.1628 0 44.4911 0.550197 45.4704 1.52955C46.4498 2.50891 47 3.8372 47 5.22222V41.7778C47 43.1628 46.4498 44.4911 45.4704 45.4704C44.4911 46.4498 43.1628 47 41.7778 47H5.22222C3.8372 47 2.50891 46.4498 1.52955 45.4704C0.550197 44.4911 0 43.1628 0 41.7778V5.22222C0 3.8372 0.550197 2.50891 1.52955 1.52955C2.50891 0.550197 3.8372 0 5.22222 0H41.7778ZM40.4722 40.4722V26.6333C40.4722 24.3758 39.5754 22.2106 37.979 20.6143C36.3827 19.0179 34.2176 18.1211 31.96 18.1211C29.7406 18.1211 27.1556 19.4789 25.9022 21.5156V18.6172H18.6172V40.4722H25.9022V27.5994C25.9022 25.5889 27.5211 23.9439 29.5317 23.9439C30.5012 23.9439 31.431 24.329 32.1165 25.0146C32.8021 25.7001 33.1872 26.6299 33.1872 27.5994V40.4722H40.4722ZM10.1311 14.5178C11.2945 14.5178 12.4103 14.0556 13.233 13.233C14.0556 12.4103 14.5178 11.2945 14.5178 10.1311C14.5178 7.70278 12.5594 5.71833 10.1311 5.71833C8.96077 5.71833 7.83836 6.18325 7.01081 7.01081C6.18325 7.83836 5.71833 8.96077 5.71833 10.1311C5.71833 12.5594 7.70278 14.5178 10.1311 14.5178ZM13.7606 40.4722V18.6172H6.52778V40.4722H13.7606Z" fill="#03A9F4" />
    </svg>
)

const ShareIcon = ({ className, darkmode }) => {
    return (
        darkmode ? (
            <svg width="44" height="49" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
                <path d="M36.5 34.8599C34.6633 34.8599 33.02 35.5849 31.7633 36.7208L14.5325 26.6916C14.6533 26.1358 14.75 25.5799 14.75 24.9999C14.75 24.4199 14.6533 23.8641 14.5325 23.3083L31.57 13.3758C32.875 14.5841 34.5908 15.3333 36.5 15.3333C38.4228 15.3333 40.2669 14.5694 41.6265 13.2098C42.9862 11.8501 43.75 10.0061 43.75 8.08325C43.75 6.16043 42.9862 4.31637 41.6265 2.95673C40.2669 1.59709 38.4228 0.833252 36.5 0.833252C34.5772 0.833252 32.7331 1.59709 31.3735 2.95673C30.0138 4.31637 29.25 6.16043 29.25 8.08325C29.25 8.66325 29.3467 9.21909 29.4675 9.77492L12.43 19.7074C11.125 18.4991 9.40917 17.7499 7.5 17.7499C5.57718 17.7499 3.73311 18.5138 2.37348 19.8734C1.01384 21.233 0.25 23.0771 0.25 24.9999C0.25 26.9227 1.01384 28.7668 2.37348 30.1264C3.73311 31.4861 5.57718 32.2499 7.5 32.2499C9.40917 32.2499 11.125 31.5008 12.43 30.2924L29.6367 40.3216C29.5158 40.8291 29.4433 41.3608 29.4433 41.9166C29.4433 45.8074 32.6092 48.9491 36.5 48.9491C40.3908 48.9491 43.5567 45.8074 43.5567 41.9166C43.5567 40.045 42.8132 38.2501 41.4898 36.9268C40.1664 35.6034 38.3715 34.8599 36.5 34.8599V34.8599Z" fill="white" />
            </svg>
        ) : <svg width="44" height="49" viewBox="0 0 44 49" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className}`}>
            <path d="M36.5 34.8602C34.6633 34.8602 33.02 35.5852 31.7633 36.721L14.5325 26.6918C14.6533 26.136 14.75 25.5802 14.75 25.0002C14.75 24.4202 14.6533 23.8643 14.5325 23.3085L31.57 13.376C32.875 14.5843 34.5908 15.3335 36.5 15.3335C38.4228 15.3335 40.2669 14.5697 41.6265 13.21C42.9862 11.8504 43.75 10.0063 43.75 8.0835C43.75 6.16068 42.9862 4.31661 41.6265 2.95697C40.2669 1.59733 38.4228 0.833496 36.5 0.833496C34.5772 0.833496 32.7331 1.59733 31.3735 2.95697C30.0138 4.31661 29.25 6.16068 29.25 8.0835C29.25 8.6635 29.3467 9.21933 29.4675 9.77516L12.43 19.7077C11.125 18.4993 9.40917 17.7502 7.5 17.7502C5.57718 17.7502 3.73311 18.514 2.37348 19.8736C1.01384 21.2333 0.25 23.0773 0.25 25.0002C0.25 26.923 1.01384 28.7671 2.37348 30.1267C3.73311 31.4863 5.57718 32.2502 7.5 32.2502C9.40917 32.2502 11.125 31.501 12.43 30.2927L29.6367 40.3218C29.5158 40.8293 29.4433 41.361 29.4433 41.9168C29.4433 45.8077 32.6092 48.9493 36.5 48.9493C40.3908 48.9493 43.5567 45.8077 43.5567 41.9168C43.5567 40.0453 42.8132 38.2504 41.4898 36.927C40.1664 35.6036 38.3715 34.8602 36.5 34.8602V34.8602Z" fill="black" />
        </svg>

    )
}

const ShareIt = () => {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className="dark:text-white text-center w-[max-content]">
            <p>Share it</p>
            <div className="flex items-center gap-x-4 mt-3">
                <TwitterIcon className="w-[2rem] h-[2rem]" />
                <FacebookIcon className="w-[2rem] h-[2rem]" />
                <LinkedInIcon className="w-[2rem] h-[2rem]" />
                <ShareIcon className="w-[2rem] h-[2rem]" darkmode={darkMode} />
            </div>
        </div>
    )
}

export default ShareIt