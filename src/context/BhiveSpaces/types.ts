export type BhiveSpacesContextType = {
  spaces: BhiveSpace[];
};

export type BhiveSpace = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url?: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: string | null; // Nullable field
  rules: string | null; // Nullable field
  amenities?: string[] | null;
  images: string[];
  working_hours_start: string; // Assuming HH:mm format
  working_hours_end: string; // Assuming HH:mm format
  contact_person_name?: string;
  facilities: string | null; // Nullable field
  is_active: boolean;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: number]: {
      // Using number as keys for discount tiers
      value: number;
      message: string;
    };
  };
  manager_id: string | null; // Nullable field
  can_edit?: boolean;
};
