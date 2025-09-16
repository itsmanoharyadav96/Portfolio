package com.Portfolio.model;

public class AboutData {
    private String intro;
    private String experience;
    private String profileImage;
    
    public AboutData() {}
    
    public AboutData(String intro, String experience, String profileImage) {
        this.intro = intro;
        this.experience = experience;
        this.profileImage = profileImage;
    }
    
    public String getIntro() {
        return intro;
    }
    
    public void setIntro(String intro) {
        this.intro = intro;
    }
    
    public String getExperience() {
        return experience;
    }
    
    public void setExperience(String experience) {
        this.experience = experience;
    }
    
    public String getProfileImage() {
        return profileImage;
    }
    
    public void setProfileImage(String profileImage) {
        this.profileImage = profileImage;
    }
}
