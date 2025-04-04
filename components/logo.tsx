export default function Logo() {
  return (
    <svg 
      version="1.1" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512"
      className="w-6 h-6"
    >
      <style>
        {`
          polygon { fill: white; }
        `}
      </style>
      <g>
        <polygon points="512,218.9 512,276.8 308.9,276.8 308.9,512 244.2,512 244.2,218.9" />
        <polygon points="512,109.5 512,167.5 186.8,167.5 186.8,512 122.1,512 122.1,109.5" />
        <polygon points="512,0 512,57.9 64.7,57.9 64.7,512 0,512 0,0" />
      </g>
    </svg>
  )
} 