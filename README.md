# Next-Social

## [Next.js 15 RC](https://nextjs.org/blog/next-15-rc)  

## [Document Image nextjs](https://nextjs.org/docs/pages/api-reference/components/image)  

## Resource

- [Youtube](https://www.youtube.com/watch?v=o080tU3sd0k&t=104s)

- [Starter project from github](https://github.com/safak/next-social/tree/starter)

```bash
npm install
```

## Start

```bash
npm run dev
```

> Open browser: `http://localhost:3000/`

---

## Manage Authentication

### [Clerk](https://clerk.com/)

- Use clerk for manage `Authentication`

> **Step 1:** Configure your Application  
> [Sign in to the Clerk Dashboard](https://c.vialoops.com/CL0/https:%2F%2Fdashboard.clerk.dev%2F/1/01000190b6d60561-de896ff9-c5a6-40ab-8b24-c3272ec8fa80-000000/HOwfEnZjXIwTIPamm3X-A2LkAHf6IFtedOHQ-IP1Dck=361) and create your first application so you can fully customize the authentication settings you need for your application.

> **Step 2:** Install Clerk Locally
> Follow our simple [Quickstart Guides](https://c.vialoops.com/CL0/https:%2F%2Fclerk.com%2Fdocs%2Fquickstarts%2Foverview/1/01000190b6d60561-de896ff9-c5a6-40ab-8b24-c3272ec8fa80-000000/JEjA84zYmiZymgqHf-PYW-sLVm2Wk34i5coNYa3AH4k=361) and add Clerk’s
> and components into your application.

> **Step 3:** Become your first User
> Sign up through your newly installed components and start receiving usage analytics immediately!

## [TW Elements (Tailwind CSS.)](https://tw-elements.com/)

UI For Tailwind CSS

- [Spinner CSS](https://tw-elements.com/docs/standard/components/spinners/)

## Image  
- Define Aspect ratio  
> Use `fill`  
>> - ต้องมี Parent `div` ครอบ `w-full relative aspect-video`  
>> - ต้องกำหนด `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"`  

> 1. แนวนอน Horizontal  

```dart

<div className="w-full relative aspect-video" >
    <Image
    src={
        "https://images.pexels.com/photos/25772520/pexels-photo-25772520.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
    }
    fill    // ***
    alt=""
    priority
    className=" object-cover rounded-md"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"    // ***
    />
</div>

```  
---  
> 2. แนวตั้ง Vertical  
- Parent `div` use `justify-evenly`
- Define: Width , `w-1/5`
- Use ( `style={{aspectRatio: 1 / 1.4}}` )  

```dart
<div className="flex justify-evenly gap-2 flex-wrap">
    {/* <div className="relative w-1/5 h-24"> */}
    <div className="relative w-1/5" style={{ aspectRatio: 1 / 1.4 }}>
        <Image
        src={
            "https://images.pexels.com/photos/16741638/pexels-photo-16741638.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
        }
        fill
        alt=""
        priority
        className="object-cover rounded-md"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
    </div>
</div>
```  


- [1:47:20](https://www.youtube.com/watch?v=o080tU3sd0k&t=104s)  

---  

