import { BLOGS, PROJECTS, TWITTER } from '../config';

const About = () => {
  return (
    <div>
      <h3 className="text-center text-blue-700 font-bold text-4xl mb-4">
        About Me
      </h3>

      <div className="text-gray-800 max-w-4xl mx-auto text-xl space-y-6 p-5">
        <p>
          👋 Hello! I am <span className="text-blue-700 font-bold">Vinit</span>.
          I am a software developer that loves building beautiful, performant
          end to end web applications. I am very passionate about web
          development ecosystem. I mostly learn from Youtube & online tutorials.
          I cement by learnings by building{' '}
          <a
            target="_blank"
            className="text-blue-700 font-bold hover:underline"
            href={PROJECTS}
          >
            projects
          </a>
          , reading and writing{' '}
          <a
            target="_blank"
            className="text-blue-700 font-bold hover:underline"
            href={BLOGS}
          >
            blogs
          </a>
          . Whenever I am not coding, I am probably reading, watching good
          movies/tv shows or preparing some good jokes so I can make my loved
          ones (mostly my sisters) laugh. I enjoy playing chess which I fell in
          love with since the age of 8, won few medals, lost a ton of
          tournaments, the love is only growing for chess. I am a huge Marvel
          fan and my favorite trilogy is The Dark Knight. I love having
          conversations with like minded folks, learn from them and highly
          believe in growing together, if you want to connect feel free to reach
          out on{' '}
          <a
            target="_blank"
            className="text-blue-700 font-bold hover:underline"
            href={TWITTER}
          >
            twitter
          </a>
          . I have been blessed with a privileged life and I am grateful and
          trying to make the best out of it.
        </p>

        <p className="bg-blue-100 text-gray-800 text-sm py-4 px-3 border-l-4 border-blue-500 shadow">
          Fun fact: I try to live a low key, private and a simpler life.
          Skipping parties or any random events due to which most of the people
          have stopped inviting me and as an introvert I am not complaining!
          (Intended as a joke but true story 😆)
        </p>

        <p>Thank you for reading, goodbye and have a nice day! 🤗</p>
      </div>
    </div>
  );
};

export default About;
