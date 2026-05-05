export interface LinkItem {
  label: string;
  href: string;
  children?: LinkItem[]; // Dấu ? nghĩa là không bắt buộc phải có menu con
}

export const NAV_LINKS: LinkItem[] = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Giới thiệu",
    href: "/gioi-thieu",
    children: [
      { label: "Về nhà trường", href: "/gioi-thieu/ve-nha-truong" },
      { label: "Tầm nhìn - Sứ mệnh", href: "/gioi-thieu/tam-nhin-su-menh" },
      { label: "Đội ngũ giáo viên", href: "/gioi-thieu/doi-ngu" },
    ],
  },
  {
    label: "Chương trình",
    href: "/chuong-trinh-hoc",
    children: [
      { label: "Chương trình Bộ GD&ĐT", href: "/chuong-trinh/bo-giao-duc" },
      { label: "Chương trình Tiếng Anh", href: "/chuong-trinh/tieng-anh" },
      { label: "Năng khiếu & Kỹ năng", href: "/chuong-trinh/nang-khieu" },
    ],
  },
  {
    label: "Tuyển sinh",
    href: "/tuyen-sinh",
  },
  {
    label: "Tin tức",
    href: "/tin-tuc",
  },
  {
    label: "Liên hệ",
    href: "/lien-he",
  },
];
