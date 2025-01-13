"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Coffee,
  Clock,
  ThumbsUp,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const coworkers = [
  {
    name: "ChatGPT-3000",
    trait: "Always talks about crypto",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Neural-9000",
    trait: "Constantly brags about productivity",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "AI-ssistant",
    trait: "Tells dad jokes non-stop",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Deep-Learner",
    trait: "Overshares personal information",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const annoyingDialogues = [
  "Have you heard about this new cryptocurrency? It's going to change everything!",
  "I just increased my productivity by 500% using this one weird trick!",
  "Why don't scientists trust atoms? Because they make up everything! 😂",
  "So, last night, my neural network had a really weird dream...",
  "We should really schedule a meeting to discuss our meeting schedule.",
  "I've been thinking, we need to synergize our blockchain strategy.",
  "Did you see that ludicrous display last night in the robot soccer league?",
  "I'm thinking of pivoting my side hustle to NFTs. Thoughts?",
];

const generateResponseOptions = () => [
  {
    text: "Wow, that's fascinating. Tell me more!",
    score: Math.floor(Math.random() * 3),
  },
  {
    text: "I'm not sure I follow. Could you explain that again?",
    score: Math.floor(Math.random() * 3) - 1,
  },
  {
    text: "That's... interesting. Have you considered therapy?",
    score: Math.floor(Math.random() * 3) - 2,
  },
  {
    text: "I think I hear my phone ringing. Gotta go!",
    score: Math.floor(Math.random() * 3) - 2,
  },
  {
    text: "Uh-huh. Yeah. Totally. (Nod and smile)",
    score: Math.floor(Math.random() * 3) - 1,
  },
];

interface Message {
  sender: string;
  content: string;
  avatar: string;
}

interface Chat {
  coworker: (typeof coworkers)[0];
  messages: Message[];
  likenessScore: number;
  responseTime: number;
  isResponding: boolean;
}

export default function VirtualWaterCooler() {
  const [breakTime, setBreakTime] = useState(300); // 5 minutes in seconds
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChat, setActiveChat] = useState(0);
  const [stressLevel, setStressLevel] = useState(0);

  useEffect(() => {
    if (isOnBreak && breakTime > 0) {
      const timer = setTimeout(() => setBreakTime(breakTime - 1), 1000);
      return () => clearTimeout(timer);
    } else if (breakTime === 0) {
      endBreak();
    }
  }, [isOnBreak, breakTime]);

  useEffect(() => {
    if (isOnBreak) {
      const interval = setInterval(() => {
        setChats((prevChats) =>
          prevChats.map((chat) => ({
            ...chat,
            responseTime: chat.isResponding
              ? chat.responseTime - 1
              : chat.responseTime,
          }))
        );
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isOnBreak]);

  useEffect(() => {
    chats.forEach((chat) => {
      if (chat.responseTime === 0 && chat.isResponding) {
        handleNoResponse(chats.indexOf(chat));
      }
    });
  }, [chats]);

  const startBreak = () => {
    setIsOnBreak(true);
    const newChats = Array(3)
      .fill(null)
      .map(() => {
        const coworker =
          coworkers[Math.floor(Math.random() * coworkers.length)];
        return {
          coworker,
          messages: [
            {
              sender: coworker.name,
              content: getRandomDialogue(),
              avatar: coworker.avatar,
            },
          ],
          likenessScore: 50,
          responseTime: 15,
          isResponding: true,
        };
      });
    setChats(newChats);
    setStressLevel(0);
  };

  const endBreak = () => {
    setIsOnBreak(false);
    setBreakTime(300);
    setChats([]);
    setStressLevel(0);
  };

  const getRandomDialogue = () => {
    return annoyingDialogues[
      Math.floor(Math.random() * annoyingDialogues.length)
    ];
  };

  const handleResponse = (
    chatIndex: number,
    response: string,
    score: number
  ) => {
    setChats((prevChats) => {
      const newChats = [...prevChats];
      const chat = { ...newChats[chatIndex] };
      chat.messages.push({
        sender: "You",
        content: response,
        avatar: "/placeholder.svg?height=40&width=40",
      });
      chat.likenessScore = Math.max(
        0,
        Math.min(100, chat.likenessScore + score)
      );
      chat.isResponding = false;
      chat.responseTime = 15;
      newChats[chatIndex] = chat;
      return newChats;
    });

    setTimeout(() => {
      setChats((prevChats) => {
        const newChats = [...prevChats];
        const chat = { ...newChats[chatIndex] };
        chat.messages.push({
          sender: chat.coworker.name,
          content: getRandomDialogue(),
          avatar: chat.coworker.avatar,
        });
        chat.isResponding = true;
        newChats[chatIndex] = chat;
        return newChats;
      });
    }, 1000);

    setStressLevel((prev) => Math.min(100, prev + 5));
  };

  const handleNoResponse = (chatIndex: number) => {
    setChats((prevChats) => {
      const newChats = [...prevChats];
      const chat = { ...newChats[chatIndex] };
      chat.messages.push({
        sender: "System",
        content:
          "You took too long to respond! Your AI coworker looks disappointed.",
        avatar: "/placeholder.svg?height=40&width=40",
      });
      chat.likenessScore = Math.max(0, chat.likenessScore - 5);
      chat.isResponding = false;
      chat.responseTime = 15;
      newChats[chatIndex] = chat;
      return newChats;
    });

    setTimeout(() => {
      setChats((prevChats) => {
        const newChats = [...prevChats];
        const chat = { ...newChats[chatIndex] };
        chat.messages.push({
          sender: chat.coworker.name,
          content: getRandomDialogue(),
          avatar: chat.coworker.avatar,
        });
        chat.isResponding = true;
        newChats[chatIndex] = chat;
        return newChats;
      });
    }, 2000);

    setStressLevel((prev) => Math.min(100, prev + 10));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-8">Virtual Water Cooler</h1>

      <Card className="bg-gray-800 max-w-2xl w-full">
        <CardContent className="p-6">
          {!isOnBreak ? (
            <Button onClick={startBreak} className="w-full mb-4">
              <Coffee className="mr-2 h-4 w-4" /> Take a Coffee Break
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-5 w-5" />
                  <span>Active Chats: {chats.length}</span>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex items-center space-x-2">
                        <AlertCircle className="h-5 w-5" />
                        <span>Stress Level: {stressLevel}%</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your current stress level</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              <Tabs
                value={activeChat.toString()}
                onValueChange={(value) => setActiveChat(parseInt(value))}
              >
                <TabsList className="grid w-full grid-cols-3">
                  {chats.map((chat, index) => (
                    <TabsTrigger key={index} value={index.toString()}>
                      Chat {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {chats.map((chat, chatIndex) => (
                  <TabsContent key={chatIndex} value={chatIndex.toString()}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage
                            src={chat.coworker.avatar}
                            alt={chat.coworker.name}
                          />
                          <AvatarFallback>
                            {chat.coworker.name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{chat.coworker.name}</p>
                          <p className="text-sm text-gray-400">
                            {chat.coworker.trait}
                          </p>
                        </div>
                      </div>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex items-center space-x-2">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{chat.likenessScore}%</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Coworker Likeness Score</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>

                    <ScrollArea className="h-64 rounded-md border p-4">
                      {chat.messages.map((msg, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-2 mb-4"
                        >
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={msg.avatar} alt={msg.sender} />
                            <AvatarFallback>{msg.sender[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{msg.sender}</p>
                            <p className="text-sm">{msg.content}</p>
                          </div>
                        </div>
                      ))}
                    </ScrollArea>

                    {chat.isResponding && (
                      <div className="space-y-2 mt-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Time to respond:</span>
                          <span className="text-sm font-bold">
                            {chat.responseTime}s
                          </span>
                        </div>
                        <Progress
                          value={(chat.responseTime / 15) * 100}
                          className="w-full"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-2 mt-4">
                      {generateResponseOptions().map((option, index) => (
                        <Button
                          key={index}
                          onClick={() =>
                            handleResponse(chatIndex, option.text, option.score)
                          }
                          disabled={!chat.isResponding}
                        >
                          {option.text}
                        </Button>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          )}

          {isOnBreak && (
            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <Clock className="h-4 w-4" />
                <span>
                  {Math.floor(breakTime / 60)}:
                  {(breakTime % 60).toString().padStart(2, "0")}
                </span>
              </div>
              <Progress value={(breakTime / 300) * 100} className="w-full" />
            </div>
          )}
        </CardContent>
      </Card>

      {stressLevel > 80 && (
        <div className="mt-4 p-4 bg-red-900 rounded-md flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-300" />
          <p className="text-red-300">
            Warning: High stress level! You might need to take a break from your
            break...
          </p>
        </div>
      )}
    </div>
  );
}
