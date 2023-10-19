type PostMetadata = {
	title: string;
	date: string;
};

export type PostFile = {
	metadata: PostMetadata;
	default: string;
};

export type PostMetaPath = {
	metadata: PostMetadata;
	path: string;
};

export type PostRouteData = {
	posts: PostMetaPath[];
};

export type PostSlugRouteData = PostMetadata & { content: any };
