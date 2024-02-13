import React from 'react';
import Navbar from '../_components/Navbar';

const HowItWorks: React.FC = () => {
    return (
        <div className="bg-[#fdfdfd] flex justify-center items-center">

            <div className="container py-8 w-[90%] lg:w-[50%]">
                <h1 className="text-3xl font-bold mb-10">How It Works</h1>

                {/* Section 1: Introduction */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-8">Welcome to FundMyBrew - Where Your Creativity Meets Support!</h2>
                    <p>
                        Welcome to FundMyBrew, the platform designed to empower creators like you. Whether you&apos;re an artist, writer,
                        musician, or any other creative individual, FundMyBrew provides a space where your community can support your
                        passion and help bring your projects to life.
                    </p>
                </section>

                {/* Section 2: Overview */}
                <section className="mb-8">
                    <h2 className="text-xl font-bold mb-8">How FundMyBrew Works in 3 Simple Steps</h2>

                    {/* Step 1: Create Your Brew */}
                    <div className="mb-4 shadow-xl p-[20px] pt-[50px]">
                        <h3 className="text-lg font-bold mb-2">Step 1: Create Your Brew</h3>
                        <p className='mb-2'>
                            <span className="font-bold">Sign Up:</span> Begin by creating a FundMyBrew account. It&apos;s quick, easy, and
                            free.
                        </p>
                        <p className='mb-2'>
                            <span className="font-bold">Craft Your Brew:</span> Set up your project or creative endeavor. Add a
                            compelling description, images, and specify the support you&apos;re seeking.
                        </p>
                    </div>

                    {/* Step 2: Share Your Brew */}
                    <div className="mb-4 shadow-xl p-[20px] pt-[50px]">
                        <h3 className="text-lg font-bold mb-2">Step 2: Share Your Brew</h3>
                        <p>
                            <span className="font-bold">Engage Your Audience:</span> Share your FundMyBrew page with your community,
                            friends, and followers on social media.
                        </p>
                        <p>
                            <span className="font-bold">Interactive Updates:</span> Keep your supporters engaged with regular updates.
                            Share progress, behind-the-scenes content, and exclusive previews to build anticipation.
                        </p>
                    </div>

                    {/* Step 3: Receive Support */}
                    <div className='mb-4 shadow-xl p-[20px] pt-[50px]'>
                        <h3 className="text-lg font-bold mb-2">Step 3: Receive Support</h3>
                        <p>
                            <span className="font-bold">Accept Support:</span> Watch as your community supports your project by making
                            contributions or becoming members.
                        </p>
                        <p>
                            <span className="font-bold">Rewards and Recognition:</span> Offer unique rewards to your supporters, showing
                            your appreciation for their contribution.
                        </p>
                        <p>
                            <span className="font-bold">Fulfillment:</span> As you reach your funding goals, bring your creative vision
                            to life. Keep supporters informed about project milestones and completion.
                        </p>
                    </div>
                </section>

                {/* Continue with other sections... */}

            </div>
        </div>
    );
};

export default HowItWorks;
