import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const handleClaimsPress = () => {

    alert('Claims page - Coming soon!');
  };

  const handlePolicyPress = () => {

    alert('Policy page - Coming soon!');
  };

  const handleRenewalsPress = () => {

    alert('Renewals page - Coming soon!');
  };

  return (
    <ThemedView style={styles.container} lightColor="#1E3A8A" darkColor="#1E3A8A">
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <ThemedView style={styles.headerContainer} lightColor="transparent" darkColor="transparent">
          <ThemedText type="title" style={styles.headerTitle}>
            Amiona Direct 🏄 
          </ThemedText>
          <ThemedText style={styles.welcomeText}>
            Welcome back! Manage your hoverboard insurance policy with ease. 🏄 
          </ThemedText>
        </ThemedView>
<ThemedText style={styles.welcomeText}>
Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"

</ThemedText>
     
        <ThemedView style={styles.quickAccessContainer} lightColor="transparent" darkColor="transparent">
          <ThemedText type="subtitle" style={styles.sectionTitle}>
            Quick Access
          </ThemedText>
          
 
          <TouchableOpacity style={styles.actionButton} onPress={handleClaimsPress}>
            <ThemedView style={styles.buttonContent} lightColor="#3B82F6" darkColor="#3B82F6">
              <ThemedText type="defaultSemiBold" style={styles.buttonIcon}>
                📋
              </ThemedText>
              <ThemedView style={styles.buttonTextContainer} lightColor="transparent" darkColor="transparent">
                <ThemedText type="defaultSemiBold" style={styles.buttonTitle}>
                  File a Claim
                </ThemedText>
                <ThemedText style={styles.buttonSubtitle}>
                  Report an incident or check claim status
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </TouchableOpacity>


          <TouchableOpacity style={styles.actionButton} onPress={handlePolicyPress}>
            <ThemedView style={styles.buttonContent} lightColor="#3B82F6" darkColor="#3B82F6">
              <ThemedText type="defaultSemiBold" style={styles.buttonIcon}>
                📄
              </ThemedText>
              <ThemedView style={styles.buttonTextContainer} lightColor="transparent" darkColor="transparent">
                <ThemedText type="defaultSemiBold" style={styles.buttonTitle}>
                  View Policy
                </ThemedText>
                <ThemedText style={styles.buttonSubtitle}>
                  Access your policy details and documents
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </TouchableOpacity>

      
          <TouchableOpacity style={styles.actionButton} onPress={handleRenewalsPress}>
            <ThemedView style={styles.buttonContent} lightColor="#3B82F6" darkColor="#3B82F6">
              <ThemedText type="defaultSemiBold" style={styles.buttonIcon}>
                🔄
              </ThemedText>
              <ThemedView style={styles.buttonTextContainer} lightColor="transparent" darkColor="transparent">
                <ThemedText type="defaultSemiBold" style={styles.buttonTitle}>
                  Renewals
                </ThemedText>
                <ThemedText style={styles.buttonSubtitle}>
                  Manage policy renewals and payments
                </ThemedText>
              </ThemedView>
            </ThemedView>
          </TouchableOpacity>
        </ThemedView>


        <ThemedView style={styles.infoContainer} lightColor="rgba(255,255,255,0.1)" darkColor="rgba(255,255,255,0.1)">
          <ThemedText type="defaultSemiBold" style={styles.infoTitle}>
            Need Help?
          </ThemedText>
          <ThemedText style={styles.infoText}>
            Contact our 24/7 customer support at 1-800-SECURE or use the live chat feature.
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 0,
    position: 'sticky',
  },
  header: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: '#E5E7EB',
    textAlign: 'center',
    lineHeight: 24,
    padding: 30,
  },
  quickAccessContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  actionButton: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  buttonIcon: {
    fontSize: 32,
    marginRight: 16,
  },
  buttonTextContainer: {
    flex: 1,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 4,
  },
  buttonSubtitle: {
    fontSize: 14,
    color: '#E5E7EB',
    lineHeight: 20,
  },
  infoContainer: {
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#E5E7EB',
    lineHeight: 20,
  },
  headerContainer: {
    flex: 1,
    position: 'sticky',
    top: 0,
    backgroundColor: '#030d27',
    zIndex: 1,
    padding: 30,
  },
});
