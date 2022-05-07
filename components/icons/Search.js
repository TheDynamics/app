export default function SearchIcon({ fill, width, height }) {
  return (
    <svg
      width={width ? width : 41}
      height={height ? height : 41}
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.7708 0.875C19.7215 0.875 23.5103 2.44438 26.3038 5.23789C29.0973 8.0314 30.6667 11.8202 30.6667 15.7708C30.6667 19.4604 29.3146 22.8521 27.0917 25.4646L27.7104 26.0833H29.5208L40.9792 37.5417L37.5417 40.9792L26.0833 29.5208V27.7104L25.4646 27.0917C22.7617 29.3989 19.3245 30.6664 15.7708 30.6667C11.8202 30.6667 8.0314 29.0973 5.23789 26.3038C2.44438 23.5103 0.875 19.7215 0.875 15.7708C0.875 11.8202 2.44438 8.0314 5.23789 5.23789C8.0314 2.44438 11.8202 0.875 15.7708 0.875ZM15.7708 5.45833C10.0417 5.45833 5.45833 10.0417 5.45833 15.7708C5.45833 21.5 10.0417 26.0833 15.7708 26.0833C21.5 26.0833 26.0833 21.5 26.0833 15.7708C26.0833 10.0417 21.5 5.45833 15.7708 5.45833Z"
        fill={fill ? fill : "#000000"}
      />
    </svg>
  );
}
