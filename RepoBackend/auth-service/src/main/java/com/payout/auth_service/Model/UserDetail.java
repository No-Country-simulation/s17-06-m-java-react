package com.payout.auth_service.Model;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
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
@Entity(name = "user_details")
public class UserDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @EqualsAndHashCode.Include
    @Column(name = "id_userdetail")
    private Long idUserDetail;

    @Column(name = "dni", length = 20, nullable = true, unique = true)
    private Integer dni;

    @Column(name = "name", length = 100, nullable = true)
    private String name;

    @Column(name = "last_name", length = 100, nullable = true)
    private String lastName;

    @Column(name = "address", length = 100, nullable = true)
    private String address;

    @JsonFormat(pattern = "dd/MM/yyyy")
    @Column(name = "datebirth", nullable = true)
    private Date datebirth;

    @Column(name = "created_at", nullable = true)
    @CreationTimestamp(source = SourceType.DB)
    private Timestamp createdAt;

    @Column(name = "updated_at", nullable = true)
    @UpdateTimestamp(source = SourceType.DB)
    private Timestamp updatedAt;

    @OneToOne
    @JoinColumn(name = "id_user", nullable = false, foreignKey = @ForeignKey(name = "fk_userdetail_user"))
    private User user;
}
