"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from 'react'
import useSWR from 'swr'
import styles from './dash.module.css'
import Image from "next/image";
import { useForm } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Page() {
  const router = useRouter();
  const session = useSession();
  console.log(session)
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate,error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  console.log(data) 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  if (session.status === "loading") {
    return <p>Loading...</p>
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login")
  }
  const onsubmit = async (data) => {
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: data.title,
          desc: data.desc,
          img: data.img,
          content: data.content,
          username: session.data.user.name
        })
      })
      mutate()
    } catch (error) {
      console.log(error)
    }

  }
  
  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        body:JSON.stringify({id:id})
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };



  if (session.status === "authenticated") {
    return <div className={styles.container}>
      <div className={styles.posts}>
        {isLoading?"loading...":
          data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image src={post.img} alt="" width={300} height={200} className={styles.img} />
                
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span
                className={styles.delete}
              onClick={() => handleDelete(post._id)}
              >
                <DeleteIcon/>
              </span>
            </div>
          ))}
      </div>
      <form className={styles.createPosts} onSubmit={handleSubmit(onsubmit)}>
        <h1>Add new post</h1>
        <input type="text" placeholder='Title' className={styles.input}  {...register('title', { required: true })} />
        <hr />
        <input type="text" placeholder='Desc' className={styles.input}   {...register('desc', { required: true })} />
        <hr />
        <input type="text" placeholder='Image' className={styles.input}
          {...register('img', { required: true })} />
        <hr />
        <textarea className={styles.textarea} cols="30" rows="10" placeholder="Message"   {...register('content', { required: true })}></textarea>
        <button className={styles.btn}> Add</button>
      </form>
    </div>

  }




}
