import styled from "styled-components";
import { Column, MyFont, Title } from "../styled"
import { Device } from "@/Themes/Device";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const makeBlogUrl = (categorySlug:any, titleSlug:any) => {
    if(categorySlug === undefined || titleSlug === undefined) {
        console.log("categorySlug or titleSlug is undefined");
        return `${window.location.origin}/guides`;
    }
    return `${window.location.origin}/guides/${categorySlug}/${titleSlug}`;
  }

const Container = styled.div`
    margin-top: 40px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 110%;
    margin-top: 20px;

    @media ${Device.tab} {
        grid-template-columns: 50% 50%;
    }
`;

const HorizontalLine = styled.div`
    height: 3px;
    width: 90%;
    background-color: #D6D9DD;
    margin-top: 20px;
`;

const IndexContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 60px;
    margin-top: 40px;
    flex-wrap: wrap;
`;

const Index = styled.div<{active?:boolean}>`
    color: #004E2D;
    cursor: pointer;
    font-size: 20px;
    font-weight: 700;
    font-family: Gilroy;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background-color: ${(props)=> props.active ? "#A8E0D3" : "transparent"};

    // &:hover {
    //     background-color: #A8E0D3;
    // }
`;

const Loader = styled.div`
    width: 65px;
    aspect-ratio: 1;
    --g: radial-gradient(farthest-side,#1c1c1c calc(95% - 3px),#fff calc(100% - 3px) 98%,#0000 101%) no-repeat;
    background: var(--g), var(--g), var(--g);
    background-size: 30px 30px;
    animation: l10 1.5s infinite;
    margin:auto;

   @keyframes l10 {
    0% {
      background-position: 0 0, 0 100%, 100% 100%;
    }
    25% {
      background-position: 100% 0, 0 100%, 100% 100%;
    }
    50% {
      background-position: 100% 0, 0 0, 100% 100%;
    }
    75% {
      background-position: 100% 0, 0 0, 0 100%;
    }
    100% {
      background-position: 100% 100%, 0 0, 0 100%;
    }
  }
`;

const ExploreAllBlogs = ({data}:any) => {
    const [pageNumber,setPageNumber] = useState (1);
    const [pageSize,setPageSize] = useState (10);
    const totalPages = Math.ceil(data.length / pageSize);

    useEffect(() => {
        if (ref.current) {
            observer.observe(ref.current);
        }
    }, []);

    const ref = useRef<HTMLDivElement>(null);

    // Check if ref is in view
    // If it is, increase the page number
    // If it is not, do nothing
    const handleObserver = (entities:any) => {
        const target = entities[0];
        if (target.isIntersecting) {
            console.log("Intersecting");
            increasePageSize();
        }
    }

    // Create the observer
    const observer = new IntersectionObserver(handleObserver, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    });


    const debounce = (func:any, wait:any) => {
        let timeout:any;
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                timeout = null;
                func();
            }, wait);
        }
    };

    const increasePageSize = debounce(() => {
        setPageSize((prevPageSize) => prevPageSize + 10);
    }, 1000);


    return <Container>
        <Title >
            Explore all blogs
        </Title>
        <GridContainer>
            {data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize).map((blog:any, index:number) => {
            const categorySlug = blog?.attributes?.blog_category?.data?.attributes?.slug;
            const titleSlug = blog?.attributes?.slug;
            return <Link href={makeBlogUrl(categorySlug, titleSlug)} key={index} target="_blank">
             <Column gap="10px" marginBottom={"20px"} key={index}>
                <MyFont width="90%" textWrap="ellipses" fontSize="20px" fontWeight={500} color="#000000">
                    {blog.attributes.title}
                </MyFont>
                <MyFont fontSize="14px" fontWeight={400} color="#000000">
                    {blog.attributes.reading_duration} min • {blog?.attributes?.blog_author?.data?.attributes?.Name}
                </MyFont>
                <HorizontalLine/>
            </Column>
            </Link>
        })}
        </GridContainer>

        <Loader ref={ref} id="infinite-scroll"></Loader>

    </Container>
}

export default ExploreAllBlogs;
