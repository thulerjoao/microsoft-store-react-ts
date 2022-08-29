export interface Game{
  id?: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year?: number;
  imdbScore: number;
  trailerYoutubeUrl?: string;
  gameplayYoutubeUrl?: string;
  genres: [{
    name:string
    createdAt: Date;
    updatedAt: Date;
  }];
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

export interface Profile{
  id?: string;
  title: string;
  imageUrl: string;
  user?: User;
  userId: string;
  games?: Game[];
  favoriteGames?: Game[];


}

export interface Favorite{
  id: string;
  producttitle: string;
  userId: string;
  favoritedAt: Date;
}

export interface Genres{
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

