import React, { FunctionComponent } from "react";

export const Twitter: FunctionComponent = () => {
  const onTwitterClick = () => {
    window?.open("https://twitter.com/swagy_marie", "_blank")?.focus();
  };

  return (
    <svg
      className="social-icon"
      onClick={onTwitterClick}
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="icon" filter="url(#filter0_d_762_146)">
        <circle cx="27" cy="24" r="23.5" stroke="white" fill="#FFFFFF00" />
        <path
          d="M41 15.7282C39.9703 16.1893 38.8642 16.5008 37.7013 16.6416C38.9012 15.9161 39.7988 14.7743 40.2268 13.4293C39.0995 14.1059 37.8658 14.5821 36.5791 14.8373C35.7139 13.9039 34.5679 13.2851 33.3191 13.0772C32.0702 12.8693 30.7884 13.0839 29.6725 13.6875C28.5567 14.2912 27.6693 15.2502 27.1482 16.4157C26.627 17.5811 26.5012 18.8879 26.7904 20.133C24.5062 20.0171 22.2716 19.4172 20.2317 18.3722C18.1919 17.3272 16.3922 15.8605 14.9496 14.0673C14.4564 14.927 14.1727 15.9238 14.1727 16.9855C14.1722 17.9412 14.4051 18.8822 14.8508 19.7252C15.2965 20.5681 15.9413 21.2868 16.7278 21.8176C15.8156 21.7883 14.9236 21.5392 14.1259 21.0912V21.1659C14.1258 22.5063 14.5846 23.8055 15.4246 24.843C16.2646 25.8804 17.4339 26.5923 18.7342 26.8578C17.888 27.0892 17.0008 27.1233 16.1396 26.9575C16.5065 28.1109 17.2211 29.1194 18.1834 29.842C19.1457 30.5646 20.3076 30.965 21.5063 30.9872C19.4714 32.6013 16.9583 33.4769 14.3713 33.473C13.913 33.4732 13.4551 33.4461 13 33.392C15.626 35.0981 18.6828 36.0035 21.8047 36C32.3729 36 38.1502 27.1556 38.1502 19.485C38.1502 19.2358 38.144 18.9841 38.1329 18.7349C39.2567 17.9137 40.2267 16.8969 40.9975 15.732L41 15.7282V15.7282Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_762_146"
          x="0"
          y="0"
          width="62"
          height="62"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_762_146"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_762_146"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
