function Logo(props: { className?: string }) {
    return (
        <svg fill="currentColor"
             className={props.className || "text-black dark:text-white h-6"}

             viewBox="0 0 512 512">
            <g>
                <g>
                    <path d="M490.667,234.667h-2.155c-9.92-48.619-53.013-85.333-104.512-85.333c-37.995,0-71.189,20.117-90.091,50.133
			C282.965,194.517,270.912,192,256,192s-26.944,2.517-37.909,7.467c-18.901-29.995-52.096-50.133-90.091-50.133
			c-51.499,0-94.592,36.715-104.512,85.333h-2.155C9.536,234.667,0,244.224,0,256c0,11.776,9.536,21.333,21.333,21.333h2.155
			c9.92,48.619,53.013,85.333,104.512,85.333c58.816,0,106.667-47.851,106.667-106.667c0-5.632-0.811-11.051-1.664-16.448
			c6.165-3.477,12.8-4.885,22.997-4.885c10.325,0,16.896,1.365,22.997,4.843c-0.853,5.419-1.664,10.837-1.664,16.491
			c0,58.816,47.851,106.667,106.667,106.667c51.499,0,94.592-36.715,104.512-85.333h2.155c11.797,0,21.333-9.557,21.333-21.333
			C512,244.224,502.464,234.667,490.667,234.667z"/>
                </g>
            </g>
        </svg>
    );
}

export default Logo;