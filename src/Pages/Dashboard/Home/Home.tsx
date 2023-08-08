import { FC } from "react"
import './home.css'
import { Card } from "@components/Card/Card"
import Ocean from "@assets/blogimg/ocean.jpg"
import City from '@assets/blogimg/city.jpg'
import Woman from "@assets/blogimg/woman.jpg";
import Mountains from "@assets/blogimg/mountains.jpg";
import Polynesia from "@assets/blogimg/polynesia.jpg";
import Road from "@assets/blogimg/road.jpg";
import Tree from "@assets/blogimg/tree.jpg";

export const Home: FC = () => {

    const blogPosts = [
        {
            id: 1,
            date: '12-03-2023',
            img: Woman,
            title: 'Market update 5 Aug but never used drive home ract redux toolkit query typescript',
            publish: false
        },
        {
            id: 2,
            date: '12-03-2023',
            img: Polynesia,
            title: 'Market update 5 Aug but never used drive home ract redux toolkit query typescript',
            desc: 'asdsa asyudgyasg dyasduyasgd asygduyuasd gysaugd aysugd',
            publish: false
        },
        {
            id: 3,
            date: '12-03-2023',
            img: Road,
            title: 'Market update 5 Aug but never used drive home ract redux toolkit query typescript',
            desc: 'asdsa asyudgyasg dyasduyasgd asygduyuasd gysaugd aysugd',
            publish: false
        },
        {
            id: 4,
            date: '12-03-2023',
            img: Tree,
            title: 'Market update 5 Aug but never used drive home ract redux toolkit query typescript',
            desc: 'asdsa asyudgyasg dyasduyasgd asygduyuasd gysaugd aysugd',
            publish: false
        }
    ]
        
    return(
        <div>
            <h3>Drafts</h3>
            <div className="grid md:grid-cols-4 grid-cols-1">
                <Card 
                {...
                {
                    date: '12-03-2023',
                    img: City,
                    title: 'Market update 5 Aug',
                    publish: true
                }
                }
                />
            </div>
            <h3>Posts pending publication</h3>
            <div className="grid md:grid-cols-4 grid-cols-1">
                
                <Card 
                {...
                {
                    date: '12-03-2023',
                    img: Ocean,
                    title: 'Market update 5 Aug but never used drive home ract redux toolkit query typescript',
                    publish: true
                }
                }
                />
            </div>
            <div>
                <h3>Latest</h3>
               <div className="grid md:grid-cols-2 grid-cols-1">
               <Card 
                    {...
                    {
                        date: '12-03-2023',
                        img: Mountains,
                        title: 'Market update 5 Aug but never used drive home ract redux toolkit query typescript',
                        desc: 'asdsa asyudgyasg dyasduyasgd asygduyuasd gysaugd aysugd',
                        publish: true,
                        bigSize: true
                    }
                    }
                />
                <div className="grid md:grid-cols-2 sm:grid-cols-1">
                    {
                        blogPosts.map((post) => <div key={post.id} className="xl:px-5 lg:px-3 px-2"><Card  {...post} /></div>)
                    }
                </div>
               </div>
            </div>
            
        </div>
    )
}