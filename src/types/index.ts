export interface Game{
  id?: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year?: number;
  imdbScore: number;
  trailerYoutubeUrl?: string;
  gameplayYoutubeUrl?: string;
  genreName?: string;
  isfavorite?:boolean;
  createdAt: Date;
  updatedAt: Date
}

export interface User{
  id: string;
  title: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date
}

export interface Favorite{
  id: string;
  producttitle: string;
  userId: string;
  favoritedAt: Date;
}

export interface Genres{
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

