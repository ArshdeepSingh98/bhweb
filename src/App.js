import React from 'react';
import './App.css';
import ProfileImage from "./assets/profile_image.jpg";

function App() {
  return (
	  <div className="p-2" style={{ background: 'rgba(0, 119, 255, 0.3)'}}>
		  <div className="container p-5 bg-light rounded mt-4" style={{ height: '100%'}}>
			  
			  <div className="d-flex mb-5">
				  <div className="col pl-0">
					  <div className="h1 pb-2" style={{ fontFamily: 'Roboto Slab', fontWeight: '800'}}>BHAVDEEP SINGH SACHDEVA</div>
					  <hr/>
					  <div>I am a masters student at <b>Arizona State University</b>. I work with <a href="http://www.public.asu.edu/~cbaral/">Prof. Chitta Baral</a>. Previously I was an Undergraduate student at <b>Panjab University</b>. There I worked with &nbsp;
						  <a href="https://scholar.google.com/citations?user=XdElr0EAAAAJ&hl=en">Dr. Naveen Aggarwal</a>.</div>
					  <div className='mt-2'><b>Email: </b>bssachde@asu.edu</div>
				  </div>
				  <img style={{width: '250px', height: 'auto', borderRadius: '100%'}} src={ProfileImage} alt=""/>
			  </div>

			  <div className="d-flex flex-column mb-3">
				  <div className="h2" style={{ fontFamily: 'Roboto Slab', fontWeight: '500'}}>Research Interest</div>
				  <div className="mb-2" style={{ borderBottom: '1px solid #ccc', lineHeight: '10px'}}/>
				  <div>
					  <div className="w-100 font-weight-bold d-flex justify-content-center">"We humans are biased, but our models should not be."</div>
					  <div>I am interested in researching underlying technologies in artificial intelligence to build trustworthy decision systems. I want to achieve this by targeting different kinds of biases in various settings.</div>
					  <br/>
					  <ul>
						  <li className="font-weight-bold">Statistical Bias</li>
						  <div className="text-justify">My current work under the guidance of Prof. Chitta Baral deals with identifying the statistical biases in the Natural Language Inference problems. I, along with my mentor Ph.D. student Swaroop Mishra and Ms. Anjana Arunkumar (working with Prof. Chris Bryan), surveyed research publications. We identified specific parameters that accounted for the given models' false success on various baselines in NLP leaderboards. We then generalized these parameters and quantified them to seven terms, combining them to give a Data Quality Index(DQI). We are currently evaluating our approach in a dataset creation and bias removal setting. We compare our results with the existing state of the art "AFLite" algorithm. "AFLite" algorithm is a black-box approach for bias removal; if this comparison yields good results even to close range of their results, it will be essential to break this algorithm's opacity. We have also looked at modifying the "bad" sample to adversarial samples simple language modification.</div>
						  <br/>
						  <li className="font-weight-bold">Cognitive Bias</li>
						  <div className="text-justify">Existing systems exploit individual human cognitive biases to manipulate them. One such example is the Recommendation Systems(R.S.) promoting confirmation biases, thus influencing an individual's decision-making process. This technique might be trivial for Amazon's usual product suggestions, but it is critical for suggesting a voting advertisement. I want to curb such biases in high-risk categories.</div>
						  <br/>
						  <li className="font-weight-bold">Historical Bias</li>
						  <div className="text-justify">One obvious source of bias in our models is our data and its sources. Usually, this data is gathered from humanly reported records such as news or Wikipedia data to train a generic model in natural language. The process itself makes such models biased because news and wiki articles are usually reported for tasks that are deemed necessary at that time. The everyday life of a common man is not captured in these articles fully. This can be seen in models such as GPT-3, which have been called out for being biased on numerous occasions if we keep aside its successes. In this case, I want to explore anthropology, seeking techniques for how they make their study category neutral. I want to make datasets category neutral step by step to remove biases in various datasets.</div>
					  </ul>
				  </div>
			  </div>
			  
			  <div className="d-flex flex-column mb-3">
				  <div className="h2" style={{ fontFamily: 'Roboto Slab', fontWeight: '500'}}>Publications</div>
				  <div className="mb-2" style={{ borderBottom: '1px solid #ccc', lineHeight: '10px'}}/>
				  <div>
					  <div className="h5">Workshop Publications</div>
					  <ul>
						  <li>Paper 1</li>
						  <li>Paper 2</li>
					  </ul>
				  </div>
				  <div>
					  <div className="h5">Pre-prints</div>
					  <ul>
						  <li>Paper 1</li>
						  <li>Paper 2</li>
						  <li>Paper 3</li>
					  </ul>
				  </div>
				  <div>
					  <div className="h5">Journal Publications</div>
					  <ul>
						  <li className="d-flex flex-column">
							  <div>
								  <a
									  href="https://content.iospress.com/articles/journal-of-intelligent-and-fuzzy-systems/ifs169259"
									  className="text-decoration-none text-dark font-weight-bold">
									  Traffic state detection using smartphone based acoustic sensing
								  </a>
							  </div>
							  <div>
								  Kaur, Arshvir* | Sood, Nitakshi | Aggarwal, Naveen | Vij, Dinesh | Sachdeva, Bhavdeep
							  </div>
						  </li>
					  </ul>
				  </div>
			  </div>

			  <div className="d-flex flex-column mb-3">
				  <div className="h2" style={{ fontFamily: 'Roboto Slab', fontWeight: '500'}}>Teaching</div>
				  <div className="mb-2" style={{ borderBottom: '1px solid #ccc', lineHeight: '10px'}}/>

				  <ul>
					  <li>In the Fall of 2019, I was a TA for CSE 100, Principles of programming language  Principles.</li>
					  <li>In the Fall of 2020, I was a TA for CSE 100, Principles of programming language  Principles.</li>
				  </ul>
			  </div>

			  <div className="d-flex flex-column mb-3">
				  <div className="h2" style={{ fontFamily: 'Roboto Slab', fontWeight: '500'}}>Achievements</div>
				  <div className="mb-2" style={{ borderBottom: '1px solid #ccc', lineHeight: '10px'}}/>

				  <ul>
					  <li>Silver Recognition Award &bull; Feb 2018 &amp; Dec 2017</li>
					  <li>14th Asian Roller Sports Championship (3rd Position) &bull; July 2010</li>
					  <li>National Child Award Exceptional Achievement 2009 Silver Medal &bull; Nov 2009</li>
					  <li>4th junior Boys World Roller Hockey Championship &bull; Sept 2008</li>
					  <li>Certificate of Commendation awarded &bull; Aug 2009</li>
				  </ul>
			  </div>

			  <div className="d-flex flex-column mb-3">
				  <div className="h2" style={{ fontFamily: 'Roboto Slab', fontWeight: '500'}}>Professional Experience</div>
				  <div className="mb-2" style={{ borderBottom: '1px solid #ccc', lineHeight: '10px'}}/>
				  <div className="mb-4">
					  <div className="mb-2">
						  <div className="h5 mb-0">Unisys</div>
					  </div>
					  <div>
						  <div className="h5 mb-0">Systems Engineer</div>
						  <div className="font-weight-light">Jul 2016 - Jun 2019 &bull; 3 years</div>
					  </div>
				  </div>
				  <div className="mb-4">
					  <div className="mb-2">
						  <div className="h5 mb-0">Red Dot Foundation-Safecity</div>
					  </div>
					  <div>
						  <div className="h5 mb-0">Data Science Volunteer</div>
						  <div className="font-weight-light">Jan 2018 – Jun 2018 &bull; 6 months</div>
					  </div>
				  </div>
				  <div className="mb-4">
					  <div className="mb-2">
						  <div className="h5 mb-0">Gemalto</div>
					  </div>
					  <div>
						  <div className="h5 mb-0">Software Engineer Internship</div>
						  <div className="font-weight-light">Jan 2016 – Jun 2016 &bull; 6 months</div>
					  </div>
				  </div>
			  </div>

			  <div className="d-flex flex-column mb-3">
				  <div className="h2" style={{ fontFamily: 'Roboto Slab', fontWeight: '500'}}>Projects</div>
				  <div className="mb-2" style={{ borderBottom: '1px solid #ccc', lineHeight: '10px'}}/>

				  <div className="mb-2">
					  <a className="text-decoration-none text-dark h6" target="_blank" href="https://github.com/bhavdeep98/Political-Bot-detection-and-Evolution">Evolution of Bots on Social Media</a>
					  <div className="font-weight-light">Nov 2019 – Dec 2019</div>
				  </div>

				  <div className="mb-2">
					  <a className="text-decoration-none text-dark h6" target="_blank" href="https://github.com/bhavdeep98/CSE471IntroductiontoAI">The PAC-Man Projects</a>
					  <div className="font-weight-light">Nov 2019 – Dec 2019</div>
				  </div>

				  <div className="mb-2">
					  <div className="mb-1 h6">Facial Recognition Using Feature Modulation</div>
					  <div className="font-weight-light">Aug 2018 – Aug 2018</div>
				  </div>

				  <div className="mb-2">
					  <a className="text-decoration-none text-dark h6" href="https://github.com/bhavdeep98/StockMarketAnalysis">Stock Market Analysis</a>
					  <div className="font-weight-light">Jan 2018 – Feb 2018</div>
				  </div>

				  <div className="mb-2">
					  <div className="mb-1 h6">Sentiment, Key to user identification</div>
					  <div className="font-weight-light">Dec 2017 – Dec 2017</div>
				  </div>

				  <div className="mb-2">
					  <div className="mb-1 h6">Drowsy Driver</div>
					  <div className="font-weight-light">Jul 2017 – Jul 2017</div>
				  </div>

				  <div className="mb-2">
					  <div className="mb-1 h6">Malware Detection Using Machine Learning</div>
					  <div className="font-weight-light">Oct 2016 – Dec 2016</div>
				  </div>

				  <div className="mb-2">
					  <div className="mb-1 h6">Key Management System Using CNG</div>
					  <div className="font-weight-light">Apr 2016 – Apr 2016</div>
				  </div>
			  </div>
		  </div>
	  </div>
  );
}

export default App;
