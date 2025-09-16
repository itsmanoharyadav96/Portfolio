package com.Portfolio.model;

import java.util.List;
import java.util.ArrayList;

public class HeaderData {
    private HeroTitle heroTitle;
    private String heroDescription;
    private HeroActions heroActions;
    private List<SocialLink> socialLinks;
    
    public HeaderData() {
        this.heroTitle = new HeroTitle();
        this.heroActions = new HeroActions();
        this.socialLinks = new ArrayList<>();
    }
    
    public HeaderData(HeroTitle heroTitle, String heroDescription, HeroActions heroActions, List<SocialLink> socialLinks) {
        this.heroTitle = heroTitle != null ? heroTitle : new HeroTitle();
        this.heroDescription = heroDescription;
        this.heroActions = heroActions != null ? heroActions : new HeroActions();
        this.socialLinks = socialLinks != null ? socialLinks : new ArrayList<>();
    }
    
    // Getters and Setters
    public HeroTitle getHeroTitle() {
        return heroTitle;
    }
    
    public void setHeroTitle(HeroTitle heroTitle) {
        this.heroTitle = heroTitle;
    }
    
    public String getHeroDescription() {
        return heroDescription;
    }
    
    public void setHeroDescription(String heroDescription) {
        this.heroDescription = heroDescription;
    }
    
    public HeroActions getHeroActions() {
        return heroActions;
    }
    
    public void setHeroActions(HeroActions heroActions) {
        this.heroActions = heroActions;
    }
    
    public List<SocialLink> getSocialLinks() {
        return socialLinks;
    }
    
    public void setSocialLinks(List<SocialLink> socialLinks) {
        this.socialLinks = socialLinks;
    }
    
    // Inner classes for Hero section components
    public static class HeroTitle {
        private String titleLine1;
        private String titleLine2;
        
        public HeroTitle() {}
        
        public HeroTitle(String titleLine1, String titleLine2) {
            this.titleLine1 = titleLine1;
            this.titleLine2 = titleLine2;
        }
        
        public String getTitleLine1() {
            return titleLine1;
        }
        
        public void setTitleLine1(String titleLine1) {
            this.titleLine1 = titleLine1;
        }
        
        public String getTitleLine2() {
            return titleLine2;
        }
        
        public void setTitleLine2(String titleLine2) {
            this.titleLine2 = titleLine2;
        }
        
        public String getFullTitle() {
            return (titleLine1 != null ? titleLine1 : "") + " " + (titleLine2 != null ? titleLine2 : "");
        }
    }
    
    public static class HeroActions {
        private DownloadResumeButton downloadResumeButton;
        private ArrowButton arrowButton;
        
        public HeroActions() {
            this.downloadResumeButton = new DownloadResumeButton();
            this.arrowButton = new ArrowButton();
        }
        
        public DownloadResumeButton getDownloadResumeButton() {
            return downloadResumeButton;
        }
        
        public void setDownloadResumeButton(DownloadResumeButton downloadResumeButton) {
            this.downloadResumeButton = downloadResumeButton;
        }
        
        public ArrowButton getArrowButton() {
            return arrowButton;
        }
        
        public void setArrowButton(ArrowButton arrowButton) {
            this.arrowButton = arrowButton;
        }
        
        public static class DownloadResumeButton {
            private String href;
            private String text;
            private String iconSvg;
            private boolean download;
            
            public DownloadResumeButton() {
                this.download = true;
                this.text = "Download Resume";
                this.iconSvg = "M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z";
            }
            
            public DownloadResumeButton(String href, String text, String iconSvg, boolean download) {
                this.href = href;
                this.text = text;
                this.iconSvg = iconSvg;
                this.download = download;
            }
            
            public String getHref() {
                return href;
            }
            
            public void setHref(String href) {
                this.href = href;
            }
            
            public String getText() {
                return text;
            }
            
            public void setText(String text) {
                this.text = text;
            }
            
            public String getIconSvg() {
                return iconSvg;
            }
            
            public void setIconSvg(String iconSvg) {
                this.iconSvg = iconSvg;
            }
            
            public boolean isDownload() {
                return download;
            }
            
            public void setDownload(boolean download) {
                this.download = download;
            }
        }
        
        public static class ArrowButton {
            private String arrowSymbol;
            private String action;
            
            public ArrowButton() {
                this.arrowSymbol = "→";
                this.action = "scroll";
            }
            
            public ArrowButton(String arrowSymbol, String action) {
                this.arrowSymbol = arrowSymbol;
                this.action = action;
            }
            
            public String getArrowSymbol() {
                return arrowSymbol;
            }
            
            public void setArrowSymbol(String arrowSymbol) {
                this.arrowSymbol = arrowSymbol;
            }
            
            public String getAction() {
                return action;
            }
            
            public void setAction(String action) {
                this.action = action;
            }
        }
    }
    
    public static class SocialLink {
        private String platform;
        private String href;
        private String displayName;
        private String iconSvg;
        private String iconClass;
        
        public SocialLink() {}
        
        public SocialLink(String platform, String href, String displayName, String iconSvg, String iconClass) {
            this.platform = platform;
            this.href = href;
            this.displayName = displayName;
            this.iconSvg = iconSvg;
            this.iconClass = iconClass;
        }
        
        public String getPlatform() {
            return platform;
        }
        
        public void setPlatform(String platform) {
            this.platform = platform;
        }
        
        public String getHref() {
            return href;
        }
        
        public void setHref(String href) {
            this.href = href;
        }
        
        public String getDisplayName() {
            return displayName;
        }
        
        public void setDisplayName(String displayName) {
            this.displayName = displayName;
        }
        
        public String getIconSvg() {
            return iconSvg;
        }
        
        public void setIconSvg(String iconSvg) {
            this.iconSvg = iconSvg;
        }
        
        public String getIconClass() {
            return iconClass;
        }
        
        public void setIconClass(String iconClass) {
            this.iconClass = iconClass;
        }
    }
}
