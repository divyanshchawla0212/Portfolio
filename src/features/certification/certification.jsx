import { Helmet, HelmetProvider } from "react-helmet-async";
import udemy from "../../assets/images/udemy.jpeg";
import postman from "../../assets/images/postman.png";
import scalar from "../../assets/images/spoken.jpeg";
import goldman from "../../assets/images/goldman.jpg";
import ibm from "../../assets/images/ibm.png";
import spoken from "../../assets/images/spoken.jpeg";
import jp from "../../assets/images/spoken.jpeg";
import "../../features/certification/certification.css";
import HyperText from "../../components/ui/hyper-text";

function certification() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Divyansh Chawla | Certifications</title>
      </Helmet>
      <div className="bg-mainBg p-8">
        <div className="mb-5 flex flex-col items-center gap-x-10 xl:flex-row">
          <div>
            <HyperText
              className="pb-5 text-3xl text-white"
              text="My Certifications"
            />
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={udemy}
              className="mb-1 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="mt-3 text-3xl font-bold text-white">
                Machine Learning A-Z
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Udemy</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: UC-4d12f5eb-91c1-4107-9762-87aeba9b09cb
              </div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: ML, Python, R, Algos
              </div>
            </div>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={postman}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                DeepLearning.AI
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Coursera</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: Deep Learning, scripting
              </div>
            </div>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={ibm}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                IBM Quantum Challenge 2024
              </div>
              <div className="mb-1 text-sm text-gray-300 ">IBM</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: acec26aecabc4544a48ba27a55460492
              </div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: Cloud Fundamentals
              </div>
            </div>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={goldman}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                Enterprise Automation Certification
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Workato</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: 75644388
              </div>
            </div>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={jp}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                Completion of Python 3.4.3 Training
              </div>
              <div className="mb-1 text-sm text-gray-300 ">IIT Bombay</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: 3012739CXW
              </div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: Python
              </div>
            </div>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={scalar}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                Completion of C Training
              </div>
              <div className="mb-1 text-sm text-gray-300 ">IIT Bombay</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: C
              </div>
            </div>
          </div>
        </div>

        <div className="custom-zoom-effect relative mt-3 flex max-w-full flex-col rounded-xl bg-articleBg text-textColor delay-0 duration-1000 animate-in fade-in zoom-in hover:shadow-lg sm:flex-row">
          <div className="mb-2 ml-2 mt-2 flex flex-col items-center p-3 sm:flex-row">
            <img
              src={spoken}
              className="mb-3 h-[180px] w-[180px] rounded-b-xl rounded-t-md object-fill sm:mb-0 sm:mr-2 sm:self-center"
              alt="Certifications"
            />
            <div className="ml-3 flex flex-col">
              <div className="text-3xl font-bold text-white">
                Advanced Cpp Training - Spoken Tutorial Project, IIT Bombay
              </div>
              <div className="mb-1 text-sm text-gray-300 ">Spoken Tutorial</div>
              <div className="mb-1 text-sm text-gray-300 ">
                Credential ID: 3012739KJT
              </div>
              <div className="mb-1 text-sm text-gray-300 ">
                Skills Learned: C++
              </div>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default certification;
