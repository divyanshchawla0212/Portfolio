import { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import noise1 from "../../assets/images/noise1.png";
import noise2 from "../../assets/images/noise2.png";
import HyperText from '../../components/ui/hyper-text';

function Experience() {
  const [showFullText, setShowFullText] = useState({ noise: false, other: false });
  const [currentNoiseImage, setCurrentNoiseImage] = useState(0);
  const [currentOtherImage, setCurrentOtherImage] = useState(0);

  const imagesNoise = [noise1];
  const imagesOther = [noise2];

  const toggleText = (key) => {
    setShowFullText((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const nextImage = (images, setFunction) => {
    setFunction((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const timerNoise = setTimeout(() => {
      nextImage(imagesNoise, setCurrentNoiseImage);
    }, 3000);

    const timerOther = setTimeout(() => {
      nextImage(imagesOther, setCurrentOtherImage);
    }, 3000);

    return () => {
      clearTimeout(timerNoise);
      clearTimeout(timerOther);
    };
  }, [currentNoiseImage, currentOtherImage]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Divyansh Chawla | Experience</title>
      </Helmet>
      <div className="bg-mainBg p-8">
        <div className="mb-5 flex flex-col items-center gap-x-10 xl:flex-row ">
          <div>
            <HyperText
              className="pb-5 text-3xl text-white"
              text="My Experiences"
            />
          </div>
        </div>
        <div className='flex flex-row m-5 gap-5'>

          {/* IIT Kanpur Experience */}
          <div className="flex max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg ">
            <img
              src={imagesNoise[currentNoiseImage]}
              className="h-[180px] rounded-b-xl rounded-t-lg object-cover"
              alt="Experience Noise"
            />

            <div className="p-5">
              <div className="text-xl font-bold text-white ">IIT, Kanpur</div>
              <div className="mb-2 text-sm text-gray-300">
                SURGE Research Intern - 2mos
              </div>

              <p className="text-base text-white">
                {showFullText.noise ? (
                  <>
                    <h2 className="font-bold">Responsibility</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>
                        Worked collaboratively with the development team on the
                        SURGE Project to create an intuitive Virtual Exhibition...
                      </li>
                      <li>
                        Designed the architecture of the Exhibition...
                      </li>
                    </ul>
                    <button
                      className="mt-2 inline-flex items-center rounded-lg bg-blue-700 px-1 text-center text-sm text-white hover:bg-blue-800"
                      onClick={() => toggleText('noise')}
                    >
                      Hide
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="font-bold">Responsibility</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>
                        Worked collaboratively with the development team on the
                        NoiseFit Project to create an intuitive Watch-Face Component...
                      </li>
                    </ul>
                    <button
                      className="mt-2 inline-flex items-center rounded-lg bg-blue-700 px-1 text-center text-sm text-white hover:bg-blue-800"
                      onClick={() => toggleText('noise')}
                    >
                      Read More
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

          {/* CSIR-CSIO Experience */}
          <div className="flex max-w-xs cursor-pointer flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg ">
            <img
              src={imagesOther[currentOtherImage]}
              className="h-[180px] rounded-b-xl rounded-t-lg object-cover"
              alt="Experience Other"
            />

            <div className="p-5">
              <div className="text-xl font-bold text-white ">CSIR-CSIO, Chandigarh</div>
              <div className="mb-2 text-sm text-gray-300">
                Project Intern - 3mos
              </div>

              <p className="text-base text-white">
                {showFullText.other ? (
                  <>
                    <h2 className="font-bold">Responsibility</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>
                        Implemented advanced NLP algorithms in Devanagari script 
                        to improve information retrieval capabilities...
                      </li>
                      <li>
                        Utilized Python, NLTK, spaCy, and machine learning 
                        models for text classification and named entity
                        recognition.
                      </li>
                    </ul>
                    <button
                      className="mt-2 inline-flex items-center rounded-lg bg-blue-700 px-1 text-center text-sm text-white hover:bg-blue-800"
                      onClick={() => toggleText('other')}
                    >
                      Hide
                    </button>
                  </>
                ) : (
                  <>
                    <h2 className="font-bold">Responsibility</h2>
                    <ul className="list-disc pl-5 text-gray-300">
                      <li>
                        Implemented advanced NLP algorithms in Devanagari script 
                        to improve information retrieval capabilities....
                      </li>
                    </ul>
                    <button
                      className="mt-2 inline-flex items-center rounded-lg bg-blue-700 px-1 text-center text-sm text-white hover:bg-blue-800"
                      onClick={() => toggleText('other')}
                    >
                      Read More
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

        </div>
      </div>
    </HelmetProvider>
  );
}

export default Experience;
