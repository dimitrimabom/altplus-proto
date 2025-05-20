"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Flag, MessageSquare, ThumbsUp } from "lucide-react";

interface Reply {
  author: string;
  date: string;
  content: string;
  avatar: string;
  isAuthor?: boolean;
}

interface CommentItemProps {
  author: string;
  date: string;
  content: string;
  avatar: string;
  isAuthor?: boolean;
  replies?: Reply[];
}

export function CommentItem({
  author,
  date,
  content,
  avatar,
  isAuthor = false,
  replies = [],
}: CommentItemProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showReplies, setShowReplies] = useState(true);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={`/placeholder.svg?height=40&width=40&text=${avatar}`}
              />
              <AvatarFallback>{avatar}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center">
                <p className="font-medium">
                  {author}
                  {isAuthor && (
                    <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Auteur
                    </span>
                  )}
                </p>
                <span className="mx-2 text-muted-foreground">•</span>
                <p className="text-sm text-muted-foreground">{date}</p>
              </div>
              <div className="text-muted-foreground">{content}</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0">
          <div className="flex space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className={`h-auto p-0 ${liked ? "text-primary" : ""}`}
              onClick={handleLike}
            >
              <ThumbsUp className="mr-1 h-4 w-4" />
              <span>{`{liked ? "Aimé" : "J'aime"}`}</span>
              {likeCount > 0 && <span className="ml-1">({likeCount})</span>}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0"
              onClick={() => setIsReplying(!isReplying)}
            >
              <MessageSquare className="mr-1 h-4 w-4" />
              <span>{isReplying ? "Annuler" : "Répondre"}</span>
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="h-auto p-0">
            <Flag className="mr-1 h-4 w-4" />
            <span>Signaler</span>
          </Button>
        </CardFooter>
      </Card>

      {isReplying && (
        <div className="ml-12">
          <Card>
            <CardContent className="p-4">
              <textarea
                placeholder="Écrire une réponse..."
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground"
                rows={3}
              ></textarea>
              <div className="mt-2 flex justify-end space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsReplying(false)}
                >
                  Annuler
                </Button>
                <Button size="sm">Répondre</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {replies.length > 0 && (
        <div className="ml-12 space-y-4">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-0"
              onClick={() => setShowReplies(!showReplies)}
            >
              <span>
                {showReplies ? "Masquer" : "Afficher"} les réponses (
                {replies.length})
              </span>
            </Button>
          </div>

          {showReplies &&
            replies.map((reply, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40&text=${reply.avatar}`}
                      />
                      <AvatarFallback>{reply.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1.5">
                      <div className="flex items-center">
                        <p className="font-medium">
                          {reply.author}
                          {reply.isAuthor && (
                            <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                              Auteur
                            </span>
                          )}
                        </p>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <p className="text-sm text-muted-foreground">
                          {reply.date}
                        </p>
                      </div>
                      <div className="text-muted-foreground">
                        {reply.content}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between p-4 pt-0">
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <ThumbsUp className="mr-1 h-4 w-4" />
                      <span>{`J'aime`}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      <MessageSquare className="mr-1 h-4 w-4" />
                      <span>Répondre</span>
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="h-auto p-0">
                    <Flag className="mr-1 h-4 w-4" />
                    <span>Signaler</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
}
