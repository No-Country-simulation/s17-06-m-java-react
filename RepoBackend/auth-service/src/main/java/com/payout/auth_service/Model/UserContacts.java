package com.payout.auth_service.Model;

import java.sql.Timestamp;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.DynamicUpdate;
import org.hibernate.annotations.SourceType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@DynamicUpdate
@Entity(name = "user_contacts")
public class UserContacts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    @Column(name = "id_usercontact")
    private Long idUserContact;

    @ManyToOne
    @JoinColumn(name = "id_user_init")
    private User user;

    @ManyToOne
    @JoinColumn(name = "id_user_contact", referencedColumnName = "id_user")
    private User userContact;

    @Column(name = "created_at", nullable = true)
    @CreationTimestamp(source = SourceType.DB)
    private Timestamp createdAt;
}
