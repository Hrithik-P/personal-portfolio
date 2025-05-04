'use client';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react';
import { ReactTyped } from 'react-typed';
import { frontEndIcons, backEndIcons, testing, learning } from '@/lib/constant';
import { Marquee } from '@/components/magicui/marquee';

export default function Home() {
  return (
    <main className="grid gap-2 m-auto text-white sm:max-w-6xl w-full p-2 relative sm:p-4 md:pd-5 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-8 ">
      {/*  profile card */}
      <div className="bg-dark-1 rounded ">
        <Card className="shadow-none border-dark-3">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center gap-4">
                <Image
                  className="rounded-full"
                  src="https://media.licdn.com/dms/image/v2/D5603AQHeiJQWhOf4_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725630085067?e=1750291200&v=beta&t=qRJu7qG1eT-SdMDZhHJtXuepGTtpQ2LD3bHa9qoVqg8"
                  alt="Profile Pic"
                  height={60}
                  width={60}
                />
                <div>
                  <div className="gap-2 flex items-center">
                    Hrithik P
                    <BadgeCheck className="text-blue-400 size-4.5 inline-block" />
                  </div>
                  <p className="text-xs font-normal">
                    <ReactTyped
                      backSpeed={50}
                      strings={[
                        'Software Engineer',
                        'React Developer',
                        'Web Developer',
                        'Problem Solver',
                        'Tech Enthusiast',
                      ]}
                      typeSpeed={50}
                      loop
                    />
                  </p>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="font-light">
            <div>
              I&apos;m <span className="font-bold">Hrithik P</span>, a passionate software engineer
              with a strong focus on web development. I have a deep love for coding and enjoy
              creating innovative solutions that make a positive impact.
            </div>
          </CardContent>
          <CardFooter className="block">
            <div className="font-mono flex items-center gap-2 justify-end mb-1">
              <div className="dot size-1.5 rounded-full bg-green-500"></div>
              <div className="text-xs font-extralight">Available for work</div>
            </div>
            <div className="text-xs font-light text-zinc-500 font-mono tabular-nums tracking-wider flex items-center gap-2 justify-end">
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: '2-digit',
              })}
            </div>
          </CardFooter>
        </Card>
      </div>
      {/* social icons */}
      <div className="bg-dark-1 rounded ">
        <Card className="shadow-none border-dark-3 py-4">
          <CardContent className="block">
            <div className="flex justify-between items-center">
              <div className="border-[1px] border-dark-3 px-3 rounded py-3">
                <img
                  alt=""
                  height="32"
                  width="32"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PGcgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiNmNGYyZWQiIHJ4PSI2MCIvPjxwYXRoIGZpbGw9IiMxNjE2MTQiIGQ9Ik0xMjguMDAxIDMwQzcyLjc3OSAzMCAyOCA3NC43NyAyOCAxMzAuMDAxYzAgNDQuMTgzIDI4LjY1MyA4MS42NjcgNjguMzg3IDk0Ljg5YzQuOTk3LjkyNiA2LjgzMi0yLjE2OSA2LjgzMi00LjgxYzAtMi4zODUtLjA5My0xMC4yNjItLjEzNi0xOC42MThjLTI3LjgyIDYuMDQ5LTMzLjY5LTExLjc5OS0zMy42OS0xMS43OTljLTQuNTUtMTEuNTU5LTExLjEwNC0xNC42MzItMTEuMTA0LTE0LjYzMmMtOS4wNzMtNi4yMDcuNjg0LTYuMDc5LjY4NC02LjA3OWMxMC4wNDIuNzA1IDE1LjMzIDEwLjMwNSAxNS4zMyAxMC4zMDVjOC45MTkgMTUuMjg4IDIzLjM5NCAxMC44NjggMjkuMSA4LjMxM2MuODk4LTYuNDY0IDMuNDg5LTEwLjg3NSA2LjM0OS0xMy4zNzJjLTIyLjIxMS0yLjUyOS00NS41Ni0xMS4xMDQtNDUuNTYtNDkuNDIxYzAtMTAuOTE4IDMuOTA2LTE5LjgzOSAxMC4zMDMtMjYuODQyYy0xLjAzOS0yLjUxOS00LjQ2Mi0xMi42OS45NjgtMjYuNDY0YzAgMCA4LjM5OC0yLjY4NyAyNy41MDggMTAuMjVjNy45NzctMi4yMTUgMTYuNTMxLTMuMzI2IDI1LjAzLTMuMzY0YzguNDk4LjAzOCAxNy4wNiAxLjE0OSAyNS4wNTEgMy4zNjVjMTkuMDg3LTEyLjkzOSAyNy40NzMtMTAuMjUgMjcuNDczLTEwLjI1YzUuNDQzIDEzLjc3MyAyLjAxOSAyMy45NDUuOTggMjYuNDYzYzYuNDEyIDcuMDAzIDEwLjI5MiAxNS45MjQgMTAuMjkyIDI2Ljg0MmMwIDM4LjQwOS0yMy4zOTQgNDYuODY2LTQ1LjY2MiA0OS4zNDFjMy41ODcgMy4xMDQgNi43ODMgOS4xODkgNi43ODMgMTguNTE5YzAgMTMuMzgtLjExNiAyNC4xNDktLjExNiAyNy40NDNjMCAyLjY2MSAxLjggNS43NzkgNi44NjkgNC43OTdDMTk5LjM4MyAyMTEuNjQgMjI4IDE3NC4xNjkgMjI4IDEzMC4wMDFDMjI4IDc0Ljc3MSAxODMuMjI3IDMwIDEyOC4wMDEgMzBNNjUuNDU0IDE3Mi40NTNjLS4yMi40OTctMS4wMDIuNjQ2LTEuNzE0LjMwNWMtLjcyNi0uMzI2LTEuMTMzLTEuMDA0LS44OTgtMS41MDJjLjIxNS0uNTEyLjk5OS0uNjU0IDEuNzIyLS4zMTFjLjcyNy4zMjYgMS4xNDEgMS4wMS44OSAxLjUwOG00LjkxOSA0LjM4OWMtLjQ3Ny40NDMtMS40MS4yMzctMi4wNDItLjQ2MmMtLjY1NC0uNjk3LS43NzctMS42MjktLjI5My0yLjA3OGMuNDkxLS40NDIgMS4zOTYtLjIzNSAyLjA1MS40NjJjLjY1NC43MDYuNzgyIDEuNjMxLjI4NCAyLjA3OG0zLjM3NCA1LjYxNmMtLjYxMy40MjYtMS42MTUuMDI3LTIuMjM0LS44NjNjLS42MTMtLjg4OS0uNjEzLTEuOTU1LjAxMy0yLjM4M2MuNjIxLS40MjcgMS42MDgtLjA0MyAyLjIzNi44NGMuNjExLjkwNC42MTEgMS45NzEtLjAxNSAyLjQwNm01LjcwNyA2LjUwNGMtLjU0OC42MDQtMS43MTUuNDQyLTIuNTctLjM4M2MtLjg3NC0uODA2LTEuMTE4LTEuOTUtLjU2OC0yLjU1NWMuNTU1LS42MDYgMS43MjktLjQzNSAyLjU5LjM4M2MuODY4LjgwNCAxLjEzMyAxLjk1Ny41NDggMi41NTVtNy4zNzYgMi4xOTVjLS4yNDIuNzg0LTEuMzY2IDEuMTQtMi40OTkuODA3Yy0xLjEzLS4zNDMtMS44NzEtMS4yNi0xLjY0Mi0yLjA1MmMuMjM1LS43ODggMS4zNjQtMS4xNTkgMi41MDUtLjgwM2MxLjEzLjM0MSAxLjg3MSAxLjI1MiAxLjYzNiAyLjA0OG04LjM5NC45MzJjLjAyOC44MjQtLjkzMiAxLjUwOC0yLjEyMSAxLjUyM2MtMS4xOTYuMDI3LTIuMTYzLS42NDEtMi4xNzYtMS40NTJjMC0uODMzLjkzOS0xLjUxIDIuMTM0LTEuNTNjMS4xOS0uMDIzIDIuMTYzLjYzOSAyLjE2MyAxLjQ1OW04LjI0Ni0uMzE2Yy4xNDMuODA0LS42ODMgMS42MzEtMS44NjQgMS44NTFjLTEuMTYxLjIxMi0yLjIzNi0uMjg1LTIuMzgzLTEuMDgzYy0uMTQ0LS44MjUuNjk3LTEuNjUxIDEuODU2LTEuODY1YzEuMTgzLS4yMDUgMi4yNDEuMjc5IDIuMzkxIDEuMDk3Ii8+PC9nPjwvc3ZnPg=="
                />
              </div>
              <div className="border-[1px] border-dark-3 px-3 rounded py-3">
                <img
                  alt=""
                  height="32"
                  width="32"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PGcgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9IiNmNGYyZWQiIHJ4PSI2MCIvPjxwYXRoIGZpbGw9IiM0Mjg1ZjQiIGQ9Ik00MS42MzYgMjAzLjAzOWgzMS44MTh2LTc3LjI3M0wyOCA5MS42NzZ2OTcuNzI3YzAgNy41NDUgNi4xMTQgMTMuNjM2IDEzLjYzNiAxMy42MzYiLz48cGF0aCBmaWxsPSIjMzRhODUzIiBkPSJNMTgyLjU0NSAyMDMuMDM5aDMxLjgxOWM3LjU0NSAwIDEzLjYzNi02LjExNCAxMy42MzYtMTMuNjM2VjkxLjY3NWwtNDUuNDU1IDM0LjA5MSIvPjxwYXRoIGZpbGw9IiNmYmJjMDQiIGQ9Ik0xODIuNTQ1IDY2LjY3NXY1OS4wOTFMMjI4IDkxLjY3NlY3My40OTJjMC0xNi44NjMtMTkuMjUtMjYuNDc3LTMyLjcyNy0xNi4zNjMiLz48cGF0aCBmaWxsPSIjZWE0MzM1IiBkPSJNNzMuNDU1IDEyNS43NjZ2LTU5LjA5TDEyOCAxMDcuNTgzbDU0LjU0NS00MC45MDl2NTkuMDkxTDEyOCAxNjYuNjc1Ii8+PHBhdGggZmlsbD0iI2M1MjIxZiIgZD0iTTI4IDczLjQ5M3YxOC4xODJsNDUuNDU0IDM0LjA5MXYtNTkuMDlMNjAuNzI3IDU3LjEzQzQ3LjIyNyA0Ny4wMTYgMjggNTYuNjMgMjggNzMuNDkzIi8+PC9nPjwvc3ZnPg=="
                />
              </div>
              <div className="border-[1px] border-dark-3 px-3 rounded py-3">
                <img
                  alt=""
                  height="32"
                  width="32"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PHBhdGggZmlsbD0iIzAwNzZiMiIgZD0iTTExNiAzSDEyYTguOTEgOC45MSAwIDAgMC05IDguOHYxMDQuNDJhOC45MSA4LjkxIDAgMCAwIDkgOC43OGgxMDRhOC45MyA4LjkzIDAgMCAwIDktOC44MVYxMS43N0E4LjkzIDguOTMgMCAwIDAgMTE2IDMiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjEuMDYgNDguNzNoMTguMTFWMTA3SDIxLjA2em05LjA2LTI5YTEwLjUgMTAuNSAwIDEgMS0xMC41IDEwLjQ5YTEwLjUgMTAuNSAwIDAgMSAxMC41LTEwLjQ5bTIwLjQxIDI5aDE3LjM2djhoLjI0YzIuNDItNC41OCA4LjMyLTkuNDEgMTcuMTMtOS40MUMxMDMuNiA0Ny4yOCAxMDcgNTkuMzUgMTA3IDc1djMySDg4Ljg5Vjc4LjY1YzAtNi43NS0uMTItMTUuNDQtOS40MS0xNS40NHMtMTAuODcgNy4zNi0xMC44NyAxNVYxMDdINTAuNTN6Ii8+PC9zdmc+"
                />
              </div>
              <div className="border-[1px] border-dark-3 px-3 rounded py-3">
                <img
                  alt=""
                  height="32"
                  width="32"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDE0IDE0Ij48ZyBmaWxsPSJub25lIj48ZyBjbGlwLXBhdGg9InVybCgjcHJpbWVUd2l0dGVyMCkiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0xMS4wMjUuNjU2aDIuMTQ3TDguNDgyIDYuMDNMMTQgMTMuMzQ0SDkuNjhMNi4yOTQgOC45MDlsLTMuODcgNC40MzVILjI3NWw1LjAxNi01Ljc1TDAgLjY1N2g0LjQzTDcuNDg2IDQuNzF6bS0uNzU1IDExLjRoMS4xOUwzLjc4IDEuODc3SDIuNTA0eiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9InByaW1lVHdpdHRlcjAiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0wIDBoMTR2MTRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L2c+PC9zdmc+"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* about section */}
      <div className="bg-dark-1 rounded ">
        <Card className="shadow-none border-dark-3 gap-4">
          <CardHeader>
            <CardTitle className="text-2xl ">
              About Me
              <p className="text-sm text-neutral font-light">From Kerala, India</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold m-0">My Skills</div>
            <p className="text-sm text-neutral font-light">
              These are the technologies and tools I work with daily
            </p>

            <div className="mt-4 space-y-3">
              <div>
                <h3 className="text-sm font-medium mb-2">Frontend:</h3>
                <div className="w-[254px] ">
                  <Marquee reverse pauseOnHover className="[--duration:20s] ">
                    {Object.keys(frontEndIcons)?.map((icon) => (
                      <span
                        className=" bg-dark-2 rounded border-dark-3 border-1 py-3 px-3"
                        key={icon}
                      >
                        <Image src={frontEndIcons?.[icon]} alt="" height="42" width="42" />
                      </span>
                    ))}
                  </Marquee>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Backend:</h3>
                <div className="w-[254px]">
                  <Marquee reverse pauseOnHover className="[--duration:20s] ">
                    {Object.keys(backEndIcons)?.map((icon) => (
                      <span
                        className=" bg-dark-2 rounded border-dark-3 border-1 py-3 px-3"
                        key={icon}
                      >
                        <Image src={backEndIcons?.[icon]} alt="" height="42" width="42" />
                      </span>
                    ))}
                  </Marquee>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Testing:</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(testing)?.map((icon) => (
                    <span
                      className=" bg-dark-2 rounded border-dark-3 border-1 py-3 px-3"
                      key={icon}
                    >
                      <Image src={testing?.[icon]} alt="" height="42" width="42" />
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Currently Learning:</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(learning)?.map((icon) => (
                    <span
                      className=" bg-dark-2 flex items-center rounded border-dark-3 border-1 py-3 px-3"
                      key={icon}
                    >
                      <Image src={learning?.[icon]} alt="" height="42" width="42" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* projects section */}
      <div className="bg-dark-1 rounded ">
        <Card className="shadow-none border-dark-3 gap-4">
          <CardContent>
            <h2 className="font-extrabold text-4xl">Projects</h2>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
