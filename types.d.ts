type User = {
  id: string;
  name: string;
  last_name: string;
  chats: string[];
};

type Message = {
  id: string;
  userId: string;
  content: string;
};

type Chat = {
  id: string;
  title: string;
  messages: Message[];
};
