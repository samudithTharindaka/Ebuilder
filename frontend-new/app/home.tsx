import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const ProjectScreen = () => {
  const router = useRouter();
  // Data for project items
  const projects = [
    {
      id: 1,
      title: "Shoping Mall",
      deadline: "Deadline: April 2025",
      progress: 90,
      imageUrl:
        "https://images.unsplash.com/photo-1443641723753-250ff9bb3c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8YnVpbGRpbmd8ZW58MHx8fHwxNzU4MjE2MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "Shoping Mall",
      deadline: "Deadline: April 2025",
      progress: 90,
      imageUrl:
        "https://images.unsplash.com/photo-1443641723753-250ff9bb3c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8YnVpbGRpbmd8ZW58MHx8fHwxNzU4MjE2MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Shoping Mall",
      deadline: "Deadline: April 2025",
      progress: 90,
      imageUrl:
        "https://images.unsplash.com/photo-1443641723753-250ff9bb3c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8YnVpbGRpbmd8ZW58MHx8fHwxNzU4MjE2MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Shoping Mall",
      deadline: "Deadline: April 2025",
      progress: 10,
      imageUrl:
        "https://images.unsplash.com/photo-1443641723753-250ff9bb3c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8YnVpbGRpbmd8ZW58MHx8fHwxNzU4MjE2MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Shoping Mall",
      deadline: "Deadline: April 2025",
      progress: 90,
      imageUrl:
        "https://images.unsplash.com/photo-1443641723753-250ff9bb3c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTYyMDF8MHwxfHNlYXJjaHwyMHx8YnVpbGRpbmd8ZW58MHx8fHwxNzU4MjE2MzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  // Progress bar component
  const ProgressBar = ({ progress }: { progress: number }) => {
    return (
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
    );
  };

  // Project item component
  const ProjectItem = ({ project }: { project: (typeof projects)[0] }) => {
    return (
      <View style={styles.projectItem}>
        <View style={styles.projectInfo}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <View style={styles.projectDetails}>
            <Text style={styles.projectDeadline}>{project.deadline}</Text>
            <Text style={styles.projectPercentage}>{project.progress}%</Text>
          </View>
          <ProgressBar progress={project.progress} />
        </View>
        <Image source={{ uri: project.imageUrl }} style={styles.projectImage} />
      </View>
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Profile Header */}
          <View style={styles.profileContainer}>
            <View style={styles.profileContent}>
              <Text style={styles.profileName}>Dilnuk De Silva</Text>
              <Text style={styles.profileRole}>Project Manager</Text>
            </View>
          </View>
          {/* Projects Header */}
          <View style={styles.projectsHeader}>
            <Text style={styles.projectsTitle}>Projects</Text>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addIcon}>+</Text>
            </TouchableOpacity>
          </View>
          {/* Projects List */}
          <ScrollView style={styles.projectsList}>
            {projects.map((project) => (
              <TouchableOpacity
                key={project.id}
                onPress={() => router.push("/projectDetails")}
              >
                <ProjectItem project={project} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    flex: 1,
    padding: 5,
  },
  profileContainer: {
    height: 188,
    backgroundColor: "#38AB7F", // Primary color
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  profileContent: {
    alignItems: "center",
  },
  profileName: {
    color: "#FFFFFF", // Tertiary color
    fontSize: 24,
    fontFamily: "Inter",
    marginBottom: 5,
    fontWeight: "900",
  },
  profileRole: {
    color: "#FFFFFF", // Tertiary color
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "500",
  },
  projectsHeader: {
    height: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: 25,
    marginBottom: 15,
  
  },
  projectsTitle: {
    color: "#38AB7F", // Primary color
    fontSize: 20,
    fontFamily: "inter",
    fontWeight: 600
  },
  addButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addIcon: {
    color: "#38AB7F", // Primary color
    fontSize: 30,
  },
  projectsList: {
    flex: 1,
    marginHorizontal: 25,
  },
  projectItem: {
    height: 104,
    backgroundColor: "#38AB7F", // Primary color
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  projectInfo: {
    flex: 1,
  },
  projectTitle: {
    color: "#FFFFFF", // Tertiary color
    fontSize: 15,
    fontFamily: "Inter",
    marginBottom: 5,
  },
  projectDetails: {
    flexDirection: "row",
    marginBottom: 5,
  },
  projectDeadline: {
    color: "#FFFFFF", // Tertiary color
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "300",
    marginRight: 15,
  },
  projectPercentage: {
    color: "#FFFFFF", // Tertiary color
    fontSize: 12,
    fontFamily: "Inter",
  },
  progressBarBackground: {
    height: 6,
    width: 160,
    backgroundColor: "#ffffffff", // Secondary color
    borderRadius: 3,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#ffde74ff", // Accent color
    borderRadius: 3,
  },
  projectImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default ProjectScreen;
