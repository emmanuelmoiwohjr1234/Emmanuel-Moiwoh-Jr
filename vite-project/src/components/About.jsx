import aboutPic from '../assets/picture/about me.png'

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">About <span className="text-primary">Me</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src={aboutPic}
              alt="About Me"
              className="w-full rounded-lg"
            />
          </div>
          
          <div>
            <p className="mb-6">
              Hello! I'm an enthusiastic web designer and developer with a
              passion for crafting user-friendly digital experiences. Here's
              what sets me apart:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Design Magic</h3>
                <p>I blend aesthetics and functionality to create visually stunning websites that leave a lasting impression.</p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Code Whisperer</h3>
                <p>My love for clean, efficient code ensures optimal performance and seamless user experiences.</p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">User-Centric Approach</h3>
                <p>I prioritize user experience, making every site both intuitive and delightful.</p>
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-2"><strong>Name:</strong> Emmanuel Moiwoh Jr.</p>
              <p className="mb-2"><strong>Birthday:</strong> 19 Dec 2024</p>
              <p className="mb-2"><strong>Country:</strong> Sierra, Monrovia</p>
              <p className="mb-2"><strong>Language:</strong> English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 