import React from 'react'
import TestimonialCard from './TestimonialCard'


const testimonials = [
    {
        name: 'Shashank Shetty',
        company: 'Senior Software Engineer at Goibibo',
        testimony: 'My journey with a finite loop has been a blessing altogether. It had given me a platform, where I was able to build, learn and grow both professional and personal. I met some really amazing people here. Who encouraged me to do more and gave me courage to uplift my life. Being an industrial professional I can say, finite loop really gives us the edge over the others. It gave me exposure to cooperate work style as well as opportunity to work on the latest technologies. Being an tech enthusiastic, I would highly recommend people to take part with Finite loop and their activities.',
        img: '',
    },
    {
        name: 'Pooja Shetty',
        company: 'Masters student in AI at Fau Erlangen',
        testimony: 'Finiteloop gave me opportunities to work on cutting edge technologies through real-time projects. It made me confident and helped me hone my skills. The club emphasizes team work, leadership and self-empowerment. I feel immensely fortunate to have been part of such a wonderful team.',
        img: '',
    },
    // {
    //     name: 'Mukul HS',
    //     company: 'Software Developer/Engineer at Siemens Healthineers',
    //     testimony:'I was fortunate enough to be a part of finite loop club from the founding stages.What started of as a vision by a team of lecturers with a small group of like minded individuals, has now evolved into a full fledged club.Finite loop provided an opportunity to learn and explore new skills and put them to good use in development of projects, for both internal and external users. The club was very beneficial in refining my technical skill-set and made myself better equipped for the corporate world. By organizing workshops, events, hackathons, etc. we were able to promote a culture of knowledge sharing and enabling students, which was the main motive of Finite Loop. My gratitude towards the lecturers and colleagues involved in shaping this club and providing me an opportunity to contribute to its success. Wishing for a great future ahead for Finite Loop.',
    //     img:'',
    // },
    {
        name: 'Shravya S Rao',
        company: 'VMCloud Support Engineer @VMware ',
        testimony: 'This place is to me as launch pad is to a rocket! Finite loop gave me a head start to my technical skill building. Having real time projects to work on gives a kind of confidence that’s unparalleled. ',
        img: '',
    },

    {
        name: 'Rahul Sheregar',
        company: 'Software Engineer | Sony Interactive Entertainment (SARD)',
        testimony: 'Finite Loop gave me all the technical and non technical experience required for my IT career. Finite Loop conducts various IT and non IT events shaping the budding minds of upcoming new engineer. ',
        img: '',
    },
    {
        name: 'Saheer Abdul Rehman ',
        company: 'Technical Lead @Hashedin by Deloitte',
        testimony: 'The Finiteloop Club has not only shaped me as a student, but also a professional.Being part of the club has helped build my confidence in being a leader, given me great people to connect with, and given me the incredible opportunity to learn and share new skills.',
        img: '',
    },
    {
        name: 'Melroy Neil Dsouza',
        company: 'Programmer Analyst @Oracle',
        testimony: 'As a former member, I am proud of what the club has become. The club gave me the push I needed to learn new technologies and apply the newfound knowledge on real world projects. It gave me the experience I needed to jump start my career.',
        img: '',
    },
    {
        name: 'Sanath R Pai',
        company: 'Associate Technical Support Engineer @VMware',
        testimony: 'I have done several Projects under Finite Loop Club and I have learnt a lot of cutting edge technologies. The Club  focuses on peer to peer learning mechanisms and has been successful in efficiently creating a community for developers and coding enthusiasts. The clubs CTF event helped a lot of people understand cyber security techniques as well!!. Overall it would be great opportunity for any individual interested in the field of IT to be a part of Finite Loop Club family. ',
        img: '',
    },

]


function Testimonials() {
    return (
        <>


               

                {testimonials.map((index, key) => {
                    return (
                        <>
                            <TestimonialCard 
                                key={key}
                                name={index.name}
                                company={index.company}
                                testimony={index.testimony}
                            />

                        </>
                    )
                })}
            

        </>
    )
}

export default Testimonials