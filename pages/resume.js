const resume = () => {
    
  return (
    <div className="w-full h-screen bg-amber-100 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-fuchsia-300">
        <div className="mt-12 h-96 w-1/3 bg-black rounded-md relative">
          <div className="h-[101%] w-[101%] bg-white border-[6px] border-black items-center -top-3 -left-3 rounded-md absolute flex flex-col font-light justify-center text-center text-3xl p-12">
            <h1 className="font-bold mb-4">Snag my resume</h1> Hit the button below to download my resume as a PDF. It's current as of February 24th, 2023!
            <div className="absolute flex flex-row gap-2 bottom-2 left-2">
              <div className="bg-red-400 h-4 w-4 rounded-full"></div>
              <div className="bg-yellow-400 h-4 w-4 rounded-full"></div>
              <div className="bg-green-400 h-4 w-4 rounded-full"></div>
            </div>

{/* I want this download button to animate and I will use it to learn CSS animations
 Currently, the transition to red looks pretty spot on. The transition back to black does NOT, I will need to reverse this
 I also want the letters to bounce in time with the changing color, it can be subtle and quick but should also feel fun
 lastly I want to code random colors for the text to change into so its always different */}
            <a href="/Griffin-Dooley-Resume.pdf" className="group cursor-pointer border-[6px] rounded-md border-black px-6 py-4 mt-8 flex gap-[2px]" rel="noopener noreferrer"
 download>
                <span className="font-bold text-3xl group-hover:text-red-500 duration-100 anim-span" style={{'--i':'1'}}>D</span>
                <span className="font-bold text-3xl group-hover:text-red-500 duration-200 --i:2 anim-span" style={{'--i':'2'}}>O</span>
                <span className="font-bold text-3xl group-hover:text-red-500 duration-300 --i:3 anim-span" style={{'--i':'3'}}>W</span>
                <span className="font-bold text-3xl group-hover:text-red-500 duration-[400ms] --i:4 anim-span" style={{'--i':'4'}}>N</span>
                <span className="font-bold text-3xl group-hover:text-red-500 duration-500 --i:5 anim-span" style={{'--i':'5'}}>L</span>
                <span className="font-bold text-3xl group-hover:text-red-500 duration-[600ms] --i:6 anim-span" style={{'--i':'6'}}>O</span>
                <span className="font-bold text-3xl group-hover:text-red-500 duration-700 --i:7 anim-span" style={{'--i':'7'}}>A</span>
                <span className="font-bold text-3xl group-hover:text-red-500 duration-[800ms] --i:8 anim-span" style={{'--i':'8'}}>D</span>
            </a>
            
          </div>
          <div className="absolute bg-teal-500 h-4 w-12 -right-16"></div>
          <div className="absolute bg-teal-500 h-4 w-12 -right-[3.2rem] -top-12 -rotate-45"></div>
          <div className="absolute bg-teal-500 h-12 w-4 right-4 -top-20"></div>
        </div>
      </div>
    </div>
  );
};

export default resume;
