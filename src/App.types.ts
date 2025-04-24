type TopicSubmissionType = {
  status: "approved" | "rejected";
  approved_on?: string;
};

type UserLinksType = {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
};

type ProfileImageType = {
  small: string;
  medium: string;
  large: string;
};

type SocialType = {
  instagram_username: string | null;
  portfolio_url: string | null;
  twitter_username: string | null;
  paypal_email: string | null;
};

type UserType = {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string | null;
  portfolio_url: string | null;
  bio: string | null;
  location: string | null;
  links: UserLinksType;
  profile_image: ProfileImageType;
  instagram_username: string | null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: SocialType;
};

export type ImageDataType = {
  id: string;
  slug: string;
  alternative_slugs: {
    en: string;
    es: string;
    ja: string;
    fr: string;
    it: string;
    ko: string;
    de: string;
    pt: string;
  };
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  breadcrumbs: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user?: boolean;
  current_user_collections?: [];
  sponsorship?: any;
  topic_submissions?: {
    "back-to-school"?: TopicSubmissionType;
    health?: TopicSubmissionType;
    sports?: TopicSubmissionType;
    wallpapers?: TopicSubmissionType;
  };
  asset_type?: "photo";
  user: UserType;
};
